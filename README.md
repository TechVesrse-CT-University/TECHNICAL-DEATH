# TECHNICAL-DEATH
Health Box is an AI-powered mental health and medical diagnosis system, symptom analysis via NLP, Data Set, Custom Model, Gemini AI fallback, report generation, and resource support. It offers personalized recommendations, follow-ups, resources and emergency contact features with WhatsApp and PDF export.

> # 🧠 Health Box
>
> **AI-Powered Mental & Physical Health Assistant**  
> Diagnose, track, and manage your health with personalized AI insights.
>
> ![WhatsApp Image 2025-04-11 at 10 23 54_3d61b160](https://github.com/user-attachments/assets/c54ed876-0714-4b3d-a439-789d542ee6f2)
> ![WhatsApp Image 2025-04-11 at 10 24 12_2301498b](https://github.com/user-attachments/assets/bdbc1013-d9ab-48c7-aede-2b65b81d686a)
> ![WhatsApp Image 2025-04-11 at 10 24 39_93a32adc](https://github.com/user-attachments/assets/5a22323c-3dc5-48a5-9fd0-6d8826b0c9e0)
> ![WhatsApp Image 2025-04-11 at 10 24 55_589d1ba1](https://github.com/user-attachments/assets/465721b6-5f37-49a6-a867-7de0f554e580)
> ![WhatsApp Image 2025-04-11 at 10 25 12_11dfc13a](https://github.com/user-attachments/assets/44bb1112-e647-46f6-8e35-8f3c6dbb31b1)
>![WhatsApp Image 2025-04-11 at 10 25 36_a13aa168](https://github.com/user-attachments/assets/6e14205f-1a11-493e-9229-adfb9acb575c)
> ![WhatsApp Image 2025-04-11 at 10 26 40_a28c3ae6](https://github.com/user-attachments/assets/3ebae807-30e0-4a36-a2d6-d7a54925ab23)
> ![WhatsApp Image 2025-04-11 at 10 33 15_7a608cca](https://github.com/user-attachments/assets/f6eb6116-7d43-42ba-a2c4-848c24a881ee)
> ![WhatsApp Image 2025-04-11 at 10 33 15_f8f1b575](https://github.com/user-attachments/assets/5508f758-4aea-4c16-8fce-dba6fd50749f)
> ![WhatsApp Image 2025-04-11 at 10 33 31_016b7b2c](https://github.com/user-attachments/assets/40963398-f521-414a-8f20-df9f5b0a043f)
> ![WhatsApp Image 2025-04-11 at 10 33 49_5207f017](https://github.com/user-attachments/assets/15997ac6-c8af-4fcb-a20d-0551a3ead08c)
> ![WhatsApp Image 2025-04-11 at 10 34 04_806e6543](https://github.com/user-attachments/assets/67c3ee93-37b1-4a5f-95f7-78f7fdddb2cf)
> ![WhatsApp Image 2025-04-11 at 10 34 15_93899835](https://github.com/user-attachments/assets/9517fe04-9e2f-45ad-aec5-e2ab73be5677)
> ![WhatsApp Image 2025-04-11 at 10 34 38_df82a525](https://github.com/user-attachments/assets/2270fd9b-1f36-4837-8eab-83168d3cf99f)
> ![WhatsApp Image 2025-04-11 at 10 35 05_3d7ffbb8](https://github.com/user-attachments/assets/1021641b-9b54-4e87-a704-30e23d90660e)
> ![WhatsApp Image 2025-04-11 at 10 23 38_244ac004](https://github.com/user-attachments/assets/f00f4409-af4a-4fdc-9e47-d807882197f3)
> ![WhatsApp Image 2025-04-03 at 16 32 11_037d6279](https://github.com/user-attachments/assets/b94a59d8-972a-44f0-a9c3-6a67adee3a55)
> ![WhatsApp Image 2025-04-03 at 16 32 54_9bf8ab06](https://github.com/user-attachments/assets/53126929-838b-4e79-9e3c-27827949638e)
![WhatsApp Image 2025-04-11 at 11 18 25_d3a35db2](https://github.com/user-attachments/assets/a0465e7c-1f31-4651-a927-1eda8a6c2715)
> ![WhatsApp Image 2025-04-11 at 11 18 46_240893f1](https://github.com/user-attachments/assets/4ffc1c30-6fc4-446c-9e79-b7976803ad12)
> 


 <!-- Replace with actual path -->
>
> ---
>
> ## 📌 Description
>
> Health Box is an intelligent health assistant platform for personalized symptom-based diagnosis using NLP, CSV-based datasets, and Gemini AI fallback. It supports users and healthcare workers with dashboards, follow-ups, mental health resources, PDF/WhatsApp sharing, and more.
>
> ---
>
> ## 🖼️ Preview
>
> Add screenshots or GIFs below:
>
> - ![Main Page UI](path/to/mainpage-image.png)
> - ![User Dashboard](path/to/dashboard-image.png)
> - ![Diagnosis Example](path/to/diagnosis-image.png)
>
> ---
>
> ## 🚀 Features
>
> ### 🌐 Main Page
> - Welcome Section
> - Features & Pricing
> - Testimonials / Quotes
> - About Us
> - Footer
>
> ### 🔐 Login & Registration
> - User & Admin Login
> - User Registration:
>   - Name, Email, Phone
>   - Medical History, Age, Gender, Job
>   - Terms & Conditions checkbox
>
> ### 🧾 User Dashboard
> - Chat Interface with NLP
> - Diagnosis Result:
>   - Detected Symptoms
>   - Predicted Disease & Cause
>   - Risk Level (Color-coded)
>   - Precautions, Medications, Diet, Workouts
>   - Doctors Nearby + Medicine Links
>   - Image Report Analysis
>   - Export as PDF / WhatsApp / Email
>   - Confidentiality Note
> - Profile & History Sections
>
> ### 👨‍⚕️ Public Worker Dashboard
> - View Reports
> - Call / WhatsApp / Email Patients
> - Access Summary & Medical Images
>
> ### 📚 Resources
> - Stress Relief Videos
> - Guided Breathing Exercises
> - Mental Health Blogs & FAQs
> - Helpline Numbers
>
> ---
>
> ## 🤖 AI Diagnosis Logic
>
> ```
> User Input ➜ NLP Keyword Extraction (via NLTK) ➜ CSV Matching
>            ↳ Not Matched ➜ Gemini 1.5 Pro API ➜ Store New Data in CSV
>
> ✔️ Follow-up questions for insufficient symptoms  
> ✔️ Personalized diagnosis based on age, history, and occupation  
> ```
>
> ---
>
> ## 🧠 Diagnosis Output Format
>
> - **Predicted Disease**
> - **Cause**
> - **Precautions**
> - **Medicines**
> - **Workout Suggestions**
> - **Diet Plan**
> - **Color-Coded Risk Level:**
>   - 🟢 Low
>   - 🟡 Moderate
>   - 🔴 High
>
> ---
>
> ## 🧪 Tech Stack
>
> - **Python**, **Flask**
> - **MongoDB**, **SQLite**
> - **NLTK** (for NLP)
> - **Gemini Pro 1.5 API**
> - **CSV-based Medical Dataset**
> - **PyWhatKit**, **Twilio**
> - **gTTS**, **SpeechRecognition**
> - **PDFKit**, **ReportLab**
> - **UMLS / SNOMED CT** *(optional integration)*
>
> ---
>
> ## 📦 Setup Instructions
>
> ```bash
> git clone https://github.com/yourusername/health-box.git
> cd health-box
> pip install -r requirements.txt
> python main.py
> ```
>
> ✅ Add `.env` file with your Gemini API Key
>
> ---
>
> ## 📄 License
>
> This project is licensed under the [MIT License](LICENSE).
>
> ---
>
> ## 🙌 Contributions
>
> Feel free to fork and contribute. Create a pull request with your suggested changes. Feedback and ideas are welcome!
>
> ---
>
> ## 📧 Contact
>
> For support, questions, or suggestions:  
> 📩 your-email@example.com
>
> ---

