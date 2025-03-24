import { useState } from "react";
import "./BookingForm.scss";

const BookingForm = ({ setReservationDetails }) => {
  const [formData, setFormData] = useState({
    prefix: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    language: "",
    address1: "",
    address2: "",
    city: "",
    country: "",
    state: "",
    zip: "",
    additionalGuest: {
      firstName: "",
      lastName: "",
    },
  });
  const [showGuestFields, setShowGuestFields] = useState(false);
  const [guestCount, getGuestCount] = useState(0);

  const handleAddGuestField = () => {
    setShowGuestFields(true);
  };

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle nested object (additionalGuest)
    if (name.startsWith("guest_")) {
      setFormData((prev) => ({
        ...prev,
        additionalGuest: {
          ...prev.additionalGuest,
          [name.replace("guest_", "")]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "phone",
      "email",
      "address1",
      "city",
      "country",
      "state",
      "zip",
    ];
    let newErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "This field is required";
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
      setReservationDetails(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label className="form__label">Prefix:</label>
        <input
          type="text"
          name="prefix"
          value={formData.prefix}
          onChange={handleChange}
          className="form__input input__prefix"
        />
      </div>
      {[
        { label: "First Name", name: "firstName" },
        { label: "Last Name", name: "lastName" },
        { label: "Phone", name: "phone" },
        { label: "Email", name: "email", type: "email" },
        { label: "Address 1", name: "address1" },
        { label: "Address 2", name: "address2", required: false },
        { label: "City", name: "city" },
        { label: "Country", name: "country" },
        { label: "State/Prov", name: "state" },
        { label: "Zip/Postal", name: "zip" },
      ].map(({ label, name, type = "text", required = true }) => (
        <div key={name}>
          <label className="form__label">{label}:</label>
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            required={required}
            className={"form__input input__" + name.toLowerCase()}
          />
          {errors[name] && <span className="error">{errors[name]}</span>}
        </div>
      ))}
      <div>
        <label className="form__label">Language:</label>
        <input
          type="text"
          name="language"
          value={formData.language}
          onChange={handleChange}
          className="form__input"
        />
      </div>
      <div>
        {showGuestFields && (
          <div className="guest-section">
            <h3>Additional Guest {guestCount + 1}</h3>
            <label className="form__label">First Name:</label>
            <input
              type="text"
              name={"guest_" + guestCount + "_firstName"}
              value={("guest_" + guestCount + "_firstname").firstName}
              onChange={(e) => handleChange(e)}
              className={"form__input input__firstName"}
            />

            <label className="form__label">Last Name:</label>
            <input
              type="text"
              name={"guest_" + guestCount + "_lastName"}
              value={("guest_" + guestCount + "_firstName").lastName}
              onChange={(e) => handleChange(e)}
              className={"form__input input__lastname"}
            />
          </div>
        )}
        <button
          type="button"
          onClick={handleAddGuestField}
          className="guest-btn"
        >
          + Add Guest
        </button>
        <button className="form__button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
