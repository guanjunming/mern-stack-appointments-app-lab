import { useState } from "react";
import Form from "./Form";
import Modal from "./Modal";
import { formatDateToLocalString } from "../utils/utils";

const Appointment = ({ appt, onDelete, getAppointments }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && (
        <Modal>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Edit Appointment
          </h2>
          <Form
            appointment={appt}
            setModalOpen={setModalOpen}
            getAppointments={getAppointments}
          />
        </Modal>
      )}

      <tr>
        <td className="p-3">{appt.title}</td>
        <td className="p-3">{appt.type}</td>
        <td className="p-3">{appt.purpose}</td>
        <td className="p-3">{formatDateToLocalString(appt.date)}</td>
        <td className="flex justify-end p-3">
          <div className="flex gap-2">
            <button
              className="px-4 py-2 rounded-md bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
              onClick={() => setModalOpen(true)}
            >
              Update
            </button>
            <button
              className="px-4 py-2 rounded-md bg-gray-900 text-white shadow-sm hover:bg-gray-600"
              onClick={() => onDelete(appt._id)}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Appointment;
