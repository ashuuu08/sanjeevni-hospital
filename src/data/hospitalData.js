export const departmentsData = [
  {
    id: 'general-medicine',
    name: 'General Medicine',
    shortDesc: 'Comprehensive care for adult diseases, fevers, and chronic conditions.',
    longDesc: 'The Department of General Medicine at Sanjeevni Hospital provides holistic care for a wide range of adult diseases. Our expert physicians are trained to diagnose and manage complex, multi-system disorders, serving as the first point of contact for patients.',
    symptoms: ['High Fever', 'Unexplained Weight Loss', 'Chronic Fatigue', 'Body Aches', 'Diabetes Complications'],
    services: ['Preventive Health Checkups', 'Infectious Disease Management', 'Geriatric Care', 'Diabetes & Hypertension Management'],
    tech: ['Advanced Pathology Lab', '24/7 Monitoring', 'Electronic Health Records'],
    doctors: ['dr-rajesh-sharma']
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    shortDesc: 'Advanced cardiac care, preventive cardiology, and non-invasive diagnostics.',
    longDesc: 'Our Cardiology department offers state-of-the-art facilities for the diagnosis and management of heart diseases. From routine ECGs to advanced echocardiography and TMT, we ensure early detection and effective management of cardiovascular conditions.',
    symptoms: ['Chest Pain', 'Shortness of Breath', 'Palpitations', 'High Blood Pressure', 'Dizziness'],
    services: ['ECG & 2D Echo', 'Treadmill Test (TMT)', 'Holter Monitoring', 'Heart Failure Clinic'],
    tech: ['Philips Color Doppler', 'Advanced TMT Machine', 'Defibrillators', 'Cardiac Monitors'],
    doctors: ['dr-anil-kapoor']
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics & Trauma',
    shortDesc: 'Expert treatment for fractures, joint replacements, and sports injuries.',
    longDesc: 'The Orthopedics department at Sanjeevni specializes in the diagnosis and surgical/non-surgical treatment of bone, joint, and muscle disorders. We handle complex trauma cases and perform successful joint replacement surgeries.',
    symptoms: ['Severe Joint Pain', 'Fractures', 'Back Pain', 'Arthritis', 'Sports Injuries'],
    services: ['Total Knee Replacement', 'Trauma & Fracture Surgery', 'Arthroscopy', 'Spine Care'],
    tech: ['C-Arm IITV', 'Modular OT', 'Advanced Physiotherapy Rehab'],
    doctors: ['dr-amit-kumar']
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics & Neonatology',
    shortDesc: 'Dedicated healthcare for infants, children, and adolescents with Level-3 NICU.',
    longDesc: 'Our Pediatrics department provides compassionate care for children of all ages. With a dedicated Level-3 NICU, we are fully equipped to handle premature births and critically ill newborns.',
    symptoms: ['High Fever in Children', 'Poor Weight Gain', 'Breathing Difficulties', 'Vaccination Needs'],
    services: ['Newborn Care (NICU)', 'Vaccination Clinic', 'Childhood Asthma Management', 'Pediatric Emergencies'],
    tech: ['Neonatal Ventilators', 'Incubators', 'Phototherapy Units', 'Pediatric Monitors'],
    doctors: ['dr-priya-patel']
  },
  {
    id: 'gynecology',
    name: 'Obstetrics & Gynecology',
    shortDesc: 'Complete women\'s healthcare, maternity services, and laparoscopic surgeries.',
    longDesc: 'We provide comprehensive care for women from adolescence through menopause. Our services include high-risk pregnancy management, painless delivery, and advanced laparoscopic gynecological surgeries.',
    symptoms: ['Irregular Periods', 'Pregnancy Care', 'Pelvic Pain', 'Menopause Symptoms', 'PCOD/PCOS'],
    services: ['Maternity Care & Delivery', 'Laparoscopic Surgeries', 'Infertility Counseling', 'High-Risk Pregnancy'],
    tech: ['Advanced Fetal Monitors', '3D/4D Sonography', 'Modular Maternity OT'],
    doctors: ['dr-neha-singh']
  }
];

export const doctorsData = [
  {
    id: 'dr-rajesh-sharma',
    name: 'Dr. Rajesh Sharma',
    department: 'General Medicine',
    departmentId: 'general-medicine',
    designation: 'Chief Consultant Physician',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    qualifications: 'MBBS, MD (General Medicine)',
    experience: '20+ Years',
    expertise: ['Diabetes Management', 'Hypertension', 'Infectious Diseases', 'Thyroid Disorders'],
    bio: 'Dr. Rajesh Sharma is a highly respected physician with over two decades of clinical experience. He specializes in the comprehensive management of complex lifestyle diseases and tropical fevers endemic to central India.',
    opdTimings: 'Mon-Sat: 10:00 AM - 2:00 PM'
  },
  {
    id: 'dr-priya-patel',
    name: 'Dr. Priya Patel',
    department: 'Pediatrics',
    departmentId: 'pediatrics',
    designation: 'Senior Pediatrician & Neonatologist',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800',
    qualifications: 'MBBS, MD (Pediatrics), Fellowship in Neonatology',
    experience: '15+ Years',
    expertise: ['NICU Management', 'Childhood Vaccinations', 'Pediatric Asthma', 'Neonatal Resuscitation'],
    bio: 'Dr. Priya Patel is a compassionate pediatric expert known for her exceptional work in neonatology. She has successfully managed thousands of premature and critically ill newborns.',
    opdTimings: 'Mon-Sat: 9:00 AM - 1:00 PM'
  },
  {
    id: 'dr-amit-kumar',
    name: 'Dr. Amit Kumar',
    department: 'Orthopedics',
    departmentId: 'orthopedics',
    designation: 'Orthopedic & Trauma Surgeon',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    qualifications: 'MBBS, MS (Ortho), DNB',
    experience: '12+ Years',
    expertise: ['Complex Trauma', 'Joint Replacement', 'Sports Injuries', 'Arthroscopy'],
    bio: 'Dr. Amit Kumar is a dynamic orthopedic surgeon with extensive training in trauma management and joint reconstruction. He employs the latest minimally invasive techniques for faster patient recovery.',
    opdTimings: 'Mon-Sat: 11:00 AM - 3:00 PM'
  },
  {
    id: 'dr-neha-singh',
    name: 'Dr. Neha Singh',
    department: 'Gynecology',
    departmentId: 'gynecology',
    designation: 'Senior Obstetrician & Gynecologist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    qualifications: 'MBBS, MS (OBG)',
    experience: '14+ Years',
    expertise: ['High-Risk Pregnancy', 'Laparoscopic Surgery', 'Infertility', 'Adolescent Gynecology'],
    bio: 'Dr. Neha Singh is dedicated to women’s health and empowerment. She has vast experience in handling complicated pregnancies and performing advanced laparoscopic surgeries safely.',
    opdTimings: 'Mon-Sat: 10:30 AM - 2:30 PM'
  }
];

export const blogsData = [
  {
    id: 'managing-diabetes-in-monsoon',
    title: 'Managing Diabetes During the Monsoon Season',
    date: 'August 15, 2024',
    category: 'Health Tips',
    image: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'The rainy season brings relief but also poses unique challenges for diabetic patients. Learn how to protect your feet and manage your diet.',
    content: 'Monsoon brings a refreshing change, but for diabetics, it means taking extra precautions. High humidity and dampness increase the risk of fungal infections, especially in the feet. Diabetic patients must ensure their feet are always dry and clean. Avoid walking barefoot. Moreover, the risk of water-borne diseases like typhoid and cholera increases, which can severely disrupt blood sugar levels. Stick to boiled water and freshly cooked meals. Regular monitoring of blood glucose and staying active indoors are key to enjoying a healthy monsoon.'
  },
  {
    id: 'importance-of-golden-hour-in-heart-attack',
    title: 'The Golden Hour: Why Every Minute Counts in a Heart Attack',
    date: 'September 2, 2024',
    category: 'Cardiology',
    image: 'https://images.pexels.com/photos/4056815/pexels-photo-4056815.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'In a cardiac emergency, the first 60 minutes are crucial. Understand the signs of a heart attack and what you should do immediately.',
    content: 'The "Golden Hour" refers to the first 60 minutes after a heart attack begins. Getting medical intervention during this window significantly increases the chances of survival and minimizes permanent heart damage. Symptoms like crushing chest pain, pain radiating to the left arm or jaw, severe sweating, and shortness of breath should never be ignored or dismissed as gas. At Sanjeevni Hospital, our 24/7 emergency response team is trained to administer clot-busting drugs or perform emergency interventions rapidly. Always keep emergency numbers handy and never drive yourself to the hospital if experiencing these symptoms.'
  },
  {
    id: 'pediatric-vaccination-schedule-india',
    title: 'Essential Vaccination Schedule for Children in India',
    date: 'October 10, 2024',
    category: 'Pediatrics',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Vaccinations are the strongest shield against life-threatening childhood diseases. Check out the mandatory vaccine checklist.',
    content: 'Immunization is one of the most successful and cost-effective health interventions. In India, following the recommended vaccination schedule is vital to protect your child against diseases like Tuberculosis, Polio, Hepatitis B, Diphtheria, Pertussis, Tetanus, and Measles. The primary doses begin at birth and continue through the first few years of life, with boosters required later. Parents must maintain a vaccination card and ensure no doses are missed. Our pediatric department at Sanjeevni Hospital provides painless vaccination options and detailed counseling for parents.'
  }
];
