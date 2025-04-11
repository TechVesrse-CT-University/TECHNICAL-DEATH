// Chart configuration and initialization for mental health assessment results

// Function to create a risk level chart
function createRiskLevelChart(elementId, riskLevel) {
    const canvas = document.getElementById(elementId);
    if (!canvas) return;
    
    // Determine color based on risk level
    let color;
    if (riskLevel === 'Low') {
        color = 'rgba(40, 167, 69, 0.8)'; // Green
    } else if (riskLevel === 'Moderate') {
        color = 'rgba(255, 193, 7, 0.8)'; // Yellow
    } else {
        color = 'rgba(220, 53, 69, 0.8)'; // Red
    }
    
    // Create the chart
    new Chart(canvas, {
        type: 'doughnut',
        data: {
            labels: ['Risk Level'],
            datasets: [{
                data: [1],
                backgroundColor: [color],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '70%',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            animation: {
                animateRotate: true,
                animateScale: true
            }
        }
    });
    
    // Add text in the center of the doughnut
    const ctx = canvas.getContext('2d');
    Chart.register({
        id: 'centerText',
        afterDraw: function(chart) {
            if (chart.config.type === 'doughnut') {
                const width = chart.width;
                const height = chart.height;
                const ctx = chart.ctx;
                
                ctx.restore();
                const fontSize = (height / 114).toFixed(2);
                ctx.font = fontSize + "em sans-serif";
                ctx.textBaseline = "middle";
                
                const text = riskLevel;
                const textX = Math.round((width - ctx.measureText(text).width) / 2);
                const textY = height / 2;
                
                ctx.fillStyle = color;
                ctx.fillText(text, textX, textY);
                ctx.save();
            }
        }
    });
}

// Function to create a score comparison chart
function createScoreComparisonChart(elementId, score, maxScore) {
    const canvas = document.getElementById(elementId);
    if (!canvas) return;
    
    // Calculate percentage
    const percentage = (score / maxScore) * 100;
    
    // Determine color based on percentage
    let color;
    if (percentage < 33) {
        color = 'rgba(40, 167, 69, 0.8)'; // Green
    } else if (percentage < 67) {
        color = 'rgba(255, 193, 7, 0.8)'; // Yellow
    } else {
        color = 'rgba(220, 53, 69, 0.8)'; // Red
    }
    
    // Create the chart
    new Chart(canvas, {
        type: 'bar',
        data: {
            labels: ['Your Score'],
            datasets: [{
                label: 'Score',
                data: [score],
                backgroundColor: [color],
                borderWidth: 0
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    max: maxScore,
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Score: ${context.parsed.x} out of ${maxScore}`;
                        }
                    }
                }
            }
        }
    });
}

// Function to create historical assessment chart
function createHistoricalChart(elementId, labels, datasets) {
    const canvas = document.getElementById(elementId);
    if (!canvas) return;
    
    // Create the chart
    new Chart(canvas, {
        type: 'line',
        data: {
            labels: labels,
            datasets: datasets
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
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    position: 'top'
                }
            }
        }
    });
}
