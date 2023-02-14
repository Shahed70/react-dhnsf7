import React from 'react';
import { Table } from 'react-bootstrap';

const Tests = () => {
  const medicalTests = [
    {
      testId: 1,
      testName: 'Complete Blood Count (CBC)',
      price: '$50',
      details:
        'A Complete Blood Count (CBC) is a blood test that measures different components of the blood, including red blood cells, white blood cells, and platelets.',
    },
    {
      testId: 2,
      testName: 'Lipid Profile',
      price: '$75',
      details:
        'A Lipid Profile is a blood test that measures the levels of cholesterol and triglycerides in the blood, which are both risk factors for heart disease.',
    },
    {
      testId: 3,
      testName: 'Thyroid Stimulating Hormone (TSH)',
      price: '$40',
      details:
        'A Thyroid Stimulating Hormone (TSH) test measures the amount of thyroid-stimulating hormone (TSH) in the blood, which helps to evaluate the thyroid gland function.',
    },
    {
      testId: 4,
      testName: 'Creatinine Clearance Test',
      price: '$90',
      details:
        'A Creatinine Clearance Test is a blood test that measures the amount of creatinine in the blood and calculates the rate at which creatinine is cleared from the body.',
    },
    {
      testId: 5,
      testName: 'Glucose Tolerance Test (GTT)',
      price: '$100',
      details:
        "A Glucose Tolerance Test (GTT) is a test used to diagnose diabetes or hypoglycemia (low blood sugar). It measures the body's ability to handle glucose (sugar) in the blood.",
    },
    {
      testId: 6,
      testName: 'Hemoglobin A1C',
      price: '$75',
      details:
        'A Hemoglobin A1C test is a blood test that measures the average blood sugar level over the past 2 to 3 months and helps to diagnose and manage diabetes.',
    },
    {
      testId: 7,
      testName: 'Liver Function Test (LFT)',
      price: '$85',
      details:
        'A Liver Function Test (LFT) is a blood test that measures the levels of certain enzymes and proteins in the blood, which can indicate liver damage or disease.',
    },
    {
      testId: 8,
      testName: 'Renal Function Test (RFT)',
      price: '$80',
      details:
        'A Renal Function Test (RFT) is a blood test that measures the levels of certain substances in the blood, which can indicate the functioning of the kidneys.',
    },
    {
      testId: 9,
      testName: 'Prostate Specific Antigen (PSA) Test',
      price: '$65',
      details:
        'A Prostate Specific Antigen (PSA) test is a blood test used to screen for prostate cancer. It measures the level of prostate-specific antigen (PSA) in the blood.',
    },
    {
      testId: 10,
      testName: 'Colonoscopy',
      price: '$1200',
      details:
        'A Colonoscopy is a procedure used to visualize the inside of the colon (large intestine) and to detect abnormal growths, such as polyps or cancer.',
    },
    {
      testId: 11,
      testName: 'Mammogram',
      price: '$300',
      details:
        'A Mammogram is a low-dose x-ray of the breast used to detect breast cancer or other breast changes. It can be performed as a screening test or as a diagnostic test for women who have certain breast symptoms or abnormalities.',
    },
    {
      testId: 12,
      testName: 'Pap Smear',
      price: '$100',
      details:
        'A Pap Smear, also known as a Pap Test, is a procedure used to screen for cervical cancer. It involves collecting cells from the cervix and examining them under a microscope.',
    },
    {
      testId: 13,
      testName: 'Bone Density Test (DXA Scan)',
      price: '$250',
      details:
        'A Bone Density Test, also known as a DXA Scan, is a low-dose x-ray test used to measure bone density and assess the risk of osteoporosis and fractures.',
    },
    {
      testId: 14,
      testName: 'Stress Test (Treadmill Test)',
      price: '$200',
      details:
        "A Stress Test, also known as a Treadmill Test, is a test used to evaluate the heart's function during physical activity and to diagnose heart disease.",
    },
    {
      testId: 15,
      testName: 'Electrocardiogram (ECG)',
      price: '$100',
      details:
        'An Electrocardiogram (ECG) is a test that measures the electrical activity of the heart and can help diagnose heart conditions such as arrhythmia or heart attack.',
    },
    {
      testId: 16,
      testName: 'Chest X-Ray',
      price: '$150',
      details:
        'A Chest X-Ray is an x-ray of the chest used to detect abnormalities in the lungs, heart, and blood vessels, including pneumonia, lung cancer, or congestive heart failure.',
    },
    {
      testId: 17,
      testName: 'CT Scan (Computed Tomography)',
      price: '$700',
      details:
        'A CT Scan, also known as Computed Tomography, is an imaging test that uses X-rays and computer technology to produce detailed images of the body.',
    },
    {
      testId: 18,
      testName: 'MRI (Magnetic Resonance Imaging)',
      price: '$1000',
      details:
        'An MRI, also known as Magnetic Resonance Imaging, is a test that uses a strong magnetic field and radio waves to produce detailed images of the body.',
    },
    {
      testId: 19,
      testName: 'Ultrasound',
      price: '$400',
      details:
        'An Ultrasound is a test that uses high-frequency sound waves to produce images of the inside of the body. It can be used to evaluate the organs and tissues, including the uterus, ovaries, and fetus during pregnancy.',
    },
    {
      testId: 20,
      testName: 'X-Ray',
      price: '$100',
      details:
        'An X-Ray is a type of electromagnetic radiation used to produce images of the inside of the body. It can be used to diagnose a variety of conditions, including broken bones and pneumonia.',
    },
    {
      testId: 21,
      testName: 'EEG (Electroencephalogram)',
      price: '$300',
      details:
        'An EEG, also known as an Electroencephalogram, is a test that measures the electrical activity of the brain and can help diagnose conditions such as epilepsy, brain tumor, or stroke.',
    },
    {
      testId: 22,
      testName: 'Allergy Test',
      price: '$200',
      details:
        "An Allergy Test is a test used to diagnose allergies. It can be a skin test or a blood test, and it measures the body's reaction to specific allergens, such as pollen, dust mites, or food.",
    },
    {
      testId: 23,
      testName: 'Blood Glucose Test',
      price: '$50',
      details:
        'A Blood Glucose Test is a test used to measure the amount of glucose in the blood. It is used to diagnose and monitor diabetes.',
    },
    {
      testId: 25,
      testName: 'Complete Blood Count (CBC)',
      price: '$75',
      details:
        'A Complete Blood Count (CBC) is a blood test that measures various components of the blood, including red blood cells, white blood cells, and platelets. It can help diagnose conditions such as anemia, infection, and leukemia.',
    },
    {
      testId: 26,
      testName: 'Liver Function Test',
      price: '$100',
      details:
        "A Liver Function Test is a blood test used to evaluate the liver's health and to diagnose liver disease, such as hepatitis or cirrhosis.",
    },
    {
      testId: 27,
      testName: 'Kidney Function Test',
      price: '$100',
      details:
        "A Kidney Function Test is a blood test used to evaluate the kidney's health and to diagnose kidney disease, such as acute kidney injury or chronic kidney disease.",
    },
    {
      testId: 28,
      testName: 'Thyroid Function Test',
      price: '$75',
      details:
        "A Thyroid Function Test is a blood test used to evaluate the thyroid gland's function and to diagnose thyroid disorders, such as hypothyroidism or hyperthyroidism.",
    },
    {
      testId: 29,
      testName: 'Lipid Panel',
      price: '$75',
      details:
        'A Lipid Panel is a blood test that measures the levels of cholesterol and triglycerides in the blood. It is used to assess the risk of heart disease and to monitor lipid-lowering treatment.',
    },
    {
      testId: 30,
      testName: 'Protein Electrophoresis',
      price: '$200',
      details:
        'Protein Electrophoresis is a laboratory test used to separate proteins based on their size and charge. It can help diagnose conditions such as multiple myeloma or liver disease.',
    },
    {
      testId: 31,
      testName: 'HIV Test',
      price: '$75',
      details:
        'An HIV Test is a test used to diagnose human immunodeficiency virus (HIV) infection. It can be a blood test or a mouth swab test.',
    },
    {
      testId: 32,
      testName: 'Hepatitis B Test',
      price: '$75',
      details:
        'A Hepatitis B Test is a blood test used to diagnose hepatitis B virus infection.',
    },
    {
      testId: 33,
      testName: 'Hepatitis C Test',
      price: '$75',
      details:
        'A Hepatitis C Test is a blood test used to diagnose hepatitis C virus infection.',
    },
    {
      testId: 34,
      testName: 'Syphilis Test',
      price: '$75',
      details:
        'A Syphilis Test is a blood test used to diagnose syphilis, a sexually transmitted infection caused by the bacterium Treponema pallidum.',
    },
    {
      testId: 35,
      testName: 'Herpes Test',
      price: '$200',
      details:
        'A Herpes Test is a test used to diagnose herpes simplex virus (HSV) infection. It can be a blood test or a swab test of an active herpes sore.',
    },
    {
      testId: 36,
      testName: 'HPV Test',
      price: '$200',
      details:
        'An HPV Test isa test used to detect human papillomavirus (HPV) infection. It can be a DNA test of cervical cells or a blood test for the presence of HPV antibodies.',
    },
    {
      testId: 37,
      testName: 'Chlamydia Test',
      price: '$100',
      details:
        'A Chlamydia Test is a test used to diagnose Chlamydia trachomatis infection. It can be a urine test or a swab test of the cervix, urethra, or rectum.',
    },
    {
      testId: 38,
      testName: 'Gonorrhea Test',
      price: '$100',
      details:
        'A Gonorrhea Test is a test used to diagnose Neisseria gonorrhoeae infection. It can be a urine test or a swab test of the cervix, urethra, or rectum.',
    },
    {
      testId: 39,
      testName: 'Pregnancy Test',
      price: '$20',
      details:
        'A Pregnancy Test is a test used to determine if a woman is pregnant. It can be a urine test or a blood test.',
    },
    {
      testId: 40,
      testName: 'Fertility Test',
      price: '$200',
      details:
        "A Fertility Test is a test used to evaluate a person's ability to conceive. It can be a blood test for hormone levels, an ultrasound to assess the ovaries and uterus, or a sperm analysis for a male.",
    },
    {
      testId: 41,
      testName: 'Bone Density Test',
      price: '$200',
      details:
        'A Bone Density Test is a test used to measure the density of bones and to diagnose osteoporosis. It can be a DXA scan or a peripheral bone density test.',
    },
    {
      testId: 42,
      testName: 'Mammogram',
      price: '$300',
      details:
        'A Mammogram is a test used to detect breast cancer. It is a low-dose X-ray of the breasts.',
    },
    {
      testId: 43,
      testName: 'CT Scan',
      price: '$1000',
      details:
        'A CT Scan (Computed Tomography) is a test used to produce detailed images of internal organs, bones, and tissues. It can help diagnose conditions such as cancer, trauma, or blood clots.',
    },
    {
      testId: 44,
      testName: 'MRI',
      price: '$1500',
      details:
        'An MRI (Magnetic Resonance Imaging) is a test used to produce detailed images of internal organs, bones, and tissues. It can help diagnose conditions such as brain or spinal cord injuries, cancer, or multiple sclerosis.',
    },
    {
      testId: 45,
      testName: 'Ultrasound',
      price: '$500',
      details:
        'An Ultrasound is a test used to produce images of internal organs and tissues using high-frequency sound waves. It can help diagnose conditions such as pregnancy, abdominal pain, or liver disease.',
    },
    {
      testId: 46,
      testName: 'X-Ray',
      price: '$100',
      details:
        'An X-Ray is a test used to produce images of bones and internal organs. It can help diagnose conditions such as bone fractures, pneumonia, or lung cancer.',
    },
    {
      testId: 47,
      testName: 'ECG',
      price: '$200',
      details:
        'An ECG (Electrocardiogram) is a test used to measure the electrical activity of the heart. It can help diagnose conditions such as heart attack, arrhythmia, orcongenital heart disease.',
    },
    {
      testId: 48,
      testName: 'EEG',
      price: '$500',
      details:
        'An EEG (Electroencephalogram) is a test used to measure the electrical activity of the brain. It can help diagnose conditions such as epilepsy, brain tumors, or sleep disorders.',
    },
    {
      testId: 49,
      testName: 'Stress Test',
      price: '$400',
      details:
        "A Stress Test is a test used to measure the heart's ability to respond to stress. It can be an exercise stress test or a pharmacological stress test.",
    },
    {
      testId: 50,
      testName: 'Lipid Profile',
      price: '$150',
      details:
        'A Lipid Profile is a test used to measure the levels of cholesterol and triglycerides in the blood. It is an important test for assessing the risk of heart disease.',
    },
  ];

  return (
    <div className="container my-5" id="test">
      <h1 className="text-center">Our Test Services</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="">Test Serial</th>
            <th colSpan="">Test Name</th>
            <th colSpan="">Price</th>
            <th colSpan="">Test details</th>
          </tr>
        </thead>
        <tbody>
          {medicalTests?.map((test, index) => (
            <tr key={index}>
              <td>{test.testId}</td>
              <td>{test.testName}</td>
              <td>{test.price}</td>
              <td>{test.details}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Tests;
