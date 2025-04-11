// Main JavaScript file for Mental Health Screening App

document.addEventListener('DOMContentLoaded', function() {
    // Enable tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Enable popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Handle assessment form submission
    const assessmentForm = document.getElementById('assessment-form');
    if (assessmentForm) {
        assessmentForm.addEventListener('submit', function(event) {
            // Check if all questions are answered
            const questions = document.querySelectorAll('.question-container');
            let allAnswered = true;
            
            questions.forEach(function(question) {
                const questionId = question.getAttribute('data-question-id');
                const answered = document.querySelector(`input[name="q_${questionId}"]:checked`);
                
                if (!answered) {
                    allAnswered = false;
                    question.classList.add('border', 'border-danger');
                } else {
                    question.classList.remove('border', 'border-danger');
                }
            });
            
            if (!allAnswered) {
                event.preventDefault();
                
                // Show alert message
                const alertDiv = document.createElement('div');
                alertDiv.className = 'alert alert-danger alert-dismissible fade show';
                alertDiv.setAttribute('role', 'alert');
                alertDiv.innerHTML = `
                    <strong>Please answer all questions!</strong> Unanswered questions are highlighted in red.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                `;
                
                // Insert at the top of the form
                assessmentForm.insertBefore(alertDiv, assessmentForm.firstChild);
                
                // Scroll to the top of the form
                window.scrollTo({
                    top: assessmentForm.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Handle export report functionality
    const exportButtons = document.querySelectorAll('.export-report');
    if (exportButtons.length > 0) {
        exportButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const reportType = this.getAttribute('data-report-type');
                const assessmentId = this.getAttribute('data-assessment-id');
                
                if (reportType === 'print') {
                    window.print();
                } else if (reportType === 'email') {
                    // Show email form modal
                    const emailModal = new bootstrap.Modal(document.getElementById('emailReportModal'));
                    document.getElementById('assessment-id-input').value = assessmentId;
                    emailModal.show();
                } else if (reportType === 'whatsapp') {
                    // Create shareable text
                    const reportContent = document.querySelector('.report-content').innerText;
                    const shareText = encodeURIComponent("My Mental Health Assessment Results:\n\n" + reportContent);
                    window.open(`https://wa.me/?text=${shareText}`, '_blank');
                }
            });
        });
    }

    // Password visibility toggle
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    if (togglePasswordButtons.length > 0) {
        togglePasswordButtons.forEach(button => {
            button.addEventListener('click', function() {
                const passwordInput = document.querySelector(this.getAttribute('data-target'));
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                
                // Toggle icon
                this.innerHTML = type === 'password' 
                    ? '<i class="bi bi-eye"></i>' 
                    : '<i class="bi bi-eye-slash"></i>';
            });
        });
    }

    // Handle registration form validation
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm_password').value;
            
            if (password !== confirmPassword) {
                event.preventDefault();
                const alertDiv = document.createElement('div');
                alertDiv.className = 'alert alert-danger alert-dismissible fade show';
                alertDiv.setAttribute('role', 'alert');
                alertDiv.innerHTML = `
                    <strong>Passwords do not match!</strong> Please make sure your passwords match.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                `;
                
                // Insert at the top of the form
                registrationForm.insertBefore(alertDiv, registrationForm.firstChild);
                
                // Highlight password fields
                document.getElementById('password').classList.add('is-invalid');
                document.getElementById('confirm_password').classList.add('is-invalid');
            }
        });
    }
});

// Function to initialize chart if chart container exists
function initializeAssessmentChart(chartData) {
    const chartContainer = document.getElementById('assessment-chart');
    if (!chartContainer) return;
    
    try {
        const data = JSON.parse(chartData);
        
        // Create charts for each assessment type
        for (const [assessmentType, chartInfo] of Object.entries(data)) {
            // Create canvas element for this chart
            const canvasId = `chart-${assessmentType}`;
            const canvasElement = document.createElement('canvas');
            canvasElement.id = canvasId;
            
            // Create container div with heading
            const containerDiv = document.createElement('div');
            containerDiv.className = 'chart-container mb-4';
            const heading = document.createElement('h4');
            heading.textContent = assessmentType.charAt(0).toUpperCase() + assessmentType.slice(1) + ' Scores';
            containerDiv.appendChild(heading);
            containerDiv.appendChild(canvasElement);
            
            // Add to main chart container
            chartContainer.appendChild(containerDiv);
            
            // Create chart
            new Chart(canvasElement, {
                type: 'line',
                data: {
                    labels: chartInfo.labels,
                    datasets: [{
                        label: 'Score',
                        data: chartInfo.scores,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Score'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Date'
                            }
                        }
                    },
                    plugins: {
                        tooltip: {
                            callbacks: {
                                title: function(tooltipItems) {
                                    return tooltipItems[0].label;
                                },
                                label: function(context) {
                                    return `Score: ${context.parsed.y}`;
                                }
                            }
                        }
                    }
                }
            });
        }
    } catch (error) {
        console.error('Error initializing chart:', error);
    }
}
