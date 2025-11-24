const PatientDetail = ({ patient, onClose }) => {
  if (!patient) return null;
  // Mockup history
  return (
    <div className="patient-detail-modal">
      <h3>Patient Details</h3>
      <p>
        <strong>Name Surname:</strong> {patient.name}
      </p>
      <p>
        <strong>Past Appointments:</strong>
      </p>
      <ul>
        <li>01.05.2024 - Check-up</li>
        <li>15.04.2024 - Examination</li>
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PatientDetail;
