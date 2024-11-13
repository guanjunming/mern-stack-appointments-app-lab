import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { formatToLocalDatetime } from "../utils/utils";
import Input from "./Input";

const Form = ({ appointment, setModalOpen, getAppointments }) => {
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = useFetch();

  const addAppointment = async (data) => {
    setIsError(false);
    setError(null);

    const res = await fetchData("/api/appts", "POST", data);

    if (res.ok) {
      getAppointments();
      setModalOpen(false);
    } else {
      console.error(res.msg);
      setError(res.msg);
      setIsError(true);
    }
  };

  const updateAppointment = async (data) => {
    setIsError(false);
    setError(null);

    const res = await fetchData("/api/appts/" + appointment._id, "PATCH", data);

    if (res.ok) {
      getAppointments();
      setModalOpen(false);
    } else {
      console.error(res.msg);
      setError(res.msg);
      setIsError(true);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (!appointment) {
      addAppointment(data);
    } else {
      updateAppointment(data);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-[500px]">
      <div className="flex flex-col gap-1.5">
        <Input
          type="text"
          name="title"
          label="Title"
          defaultValue={appointment?.title || ""}
          required
        />
        <Input
          type="text"
          name="type"
          label="Type"
          defaultValue={appointment?.type || ""}
          required
        />
        <Input
          type="text"
          name="purpose"
          label="Purpose"
          defaultValue={appointment?.purpose || ""}
          required
        />
        <Input
          type="text"
          name="company"
          label="Company"
          defaultValue={appointment?.company || ""}
        />
        <Input
          type="text"
          name="person"
          label="Person meeting with"
          defaultValue={appointment?.person || ""}
        />
        <Input
          type="text"
          name="address"
          label="Address"
          defaultValue={appointment?.address || ""}
        />
        <Input
          type="datetime-local"
          name="date"
          label="Date"
          defaultValue={formatToLocalDatetime(appointment?.date)}
          required
        />
        <Input
          isTextArea
          name="comments"
          label="Comments"
          defaultValue={appointment?.comments || ""}
        />
      </div>
      <div className="flex justify-end gap-3 mt-4">
        <button
          type="button"
          className="px-3 py-2 rounded-md bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={() => setModalOpen(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-5 py-2 rounded-md bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
        >
          Save
        </button>
      </div>
      {isError && error}
    </form>
  );
};

export default Form;
