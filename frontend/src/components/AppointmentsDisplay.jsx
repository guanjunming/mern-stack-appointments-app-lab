import { useEffect, useState } from "react";
import Form from "./Form";
import Modal from "./Modal";
import Appointment from "./Appointment";
import useFetch from "../hooks/useFetch";

const AppointmentsDisplay = () => {
  const [appointments, setAppointments] = useState([]);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const fetchData = useFetch();

  const getAppointments = async () => {
    setIsError(false);
    setError(null);

    const res = await fetchData("/api/appts");

    if (res.ok) {
      setAppointments(res.data);
    } else {
      console.error(res.msg);
      setError(res.msg);
      setIsError(true);
    }
  };

  const deleteAppointment = async (id) => {
    setIsError(false);
    setError(null);

    const res = await fetchData("/api/appts/" + id, "DELETE");

    if (res.ok) {
      getAppointments();
    } else {
      console.error(res.msg);
      setError(res.msg);
      setIsError(true);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <>
      {modalOpen && (
        <Modal>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Add New Appointment
          </h2>
          <Form setModalOpen={setModalOpen} getAppointments={getAppointments} />
        </Modal>
      )}

      <section className="p-4">
        <div className="flex justify-between items-center my-2 p-2">
          <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
          <button
            className="px-3 py-2 rounded-md bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
            onClick={() => setModalOpen(true)}
          >
            Add Appointment
          </button>
        </div>
        {isError && error}
        <table className="min-w-full table-auto border-collapse divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="text-left p-3">Title</th>
              <th className="text-left p-3">Type</th>
              <th className="text-left p-3">Purpose</th>
              <th className="text-left p-3">Date</th>
              <th className="w-80"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {appointments.map((appt) => (
              <Appointment
                key={appt._id}
                appt={appt}
                onDelete={deleteAppointment}
                getAppointments={getAppointments}
              />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};
export default AppointmentsDisplay;
