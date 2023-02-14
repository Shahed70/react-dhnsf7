import React from 'react';

const doctors = [
  {
    id: 1,
    name: 'Dr. John Doe',
    speciality: 'Pediatrics',
    experience: '10 years',
    image:
      'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Dr. Jane Doe',
    speciality: 'Cardiology',
    experience: '15 years',
    image:
      'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'Dr. Michael Smith',
    speciality: 'Surgery',
    experience: '20 years',
    image:
      'https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768__340.png',
  },
  {
    id: 4,
    name: 'Dr. Lisa Wilson',
    speciality: 'Orthopedics',
    experience: '12 years',
    image:
      'https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768__340.png',
  },
  {
    id: 5,
    name: 'Dr. David Johnson',
    speciality: 'Dermatology',
    experience: '8 years',
    image:
      'https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768__340.png',
  },
  {
    id: 6,
    name: 'Dr. Maria Rodriguez',
    speciality: 'Gynecology',
    experience: '15 years',
    image:
      'https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768__340.png',
  },
  {
    id: 7,
    name: 'Dr. Robert Lewis',
    speciality: 'Neurology',
    experience: '20 years',
    image:
      'https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768__340.png',
  },
  {
    id: 8,
    name: 'Dr. Sarah Davis',
    speciality: 'Ophthalmology',
    experience: '12 years',
    image:
      'https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768__340.png',
  },
  {
    id: 9,
    name: 'Dr. William Brown',
    speciality: 'Psychiatry',
    experience: '15 years',
    image:
      'https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768__340.png',
  },
  {
    id: 10,
    name: 'Dr. Elizabeth Wilson',
    speciality: 'Anesthesiology',
    experience: '20 years',
    image:
      'https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768__340.png',
  },
  {
    id: 10,
    name: 'Dr. Elizabeth Wilson',
    speciality: 'Anesthesiology',
    experience: '20 years',
    image:
      'https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768__340.png',
  },
  {
    id: 10,
    name: 'Dr. Elizabeth Wilson',
    speciality: 'Anesthesiology',
    experience: '20 years',
    image:
      'https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768__340.png',
  },
];

function DoctorCards() {
  return (
    <div className="container mt-5" id="doctor">
      <h2 className="text-center my-4">Our Doctors</h2>
      <div className="row">
        {doctors.map((doctor) => (
          <div className="text-center col-md-4 shadow mb-3" key={doctor.id}>
            <div className=" rounded p-4">
              <img
                style={{ width: 160, height: 200 }}
                src={doctor.image}
                alt={doctor.name}
                className="rounded-circle mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-center">{doctor.name}</h3>
              <p className="text-gray-500">{doctor.speciality}</p>
              <p className="text-gray-600 text-center">
                Experience: {doctor.experience}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default DoctorCards;
