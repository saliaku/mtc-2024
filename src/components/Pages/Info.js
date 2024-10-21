import React from "react";

const Info = () => {
  const contacts = [
    {
      name: "John Doe",
      role: "Event Coordinator",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
    },
    {
      name: "Jane Smith",
      role: "Convener",
      email: "jane.smith@example.com",
      phone: "+1 (555) 987-6543",
    },
    {
      name: "Emily Johnson",
      role: "Logistics Manager",
      email: "emily.johnson@example.com",
      phone: "+1 (555) 555-5555",
    },
    {
      name: "Michael Brown",
      role: "Sponsorship Coordinator",
      email: "michael.brown@example.com",
      phone: "+1 (555) 444-4444",
    },
  ];

  return (
    <div className="flex">
      {/* Info Section */}
      <div className="info-container p-4 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Important Contacts</h2>
        <ul className="space-y-4">
          {contacts.map((contact, index) => (
            <li key={index} className="border p-4 rounded shadow">
              <h3 className="font-semibold">{contact.name}</h3>
              <p>{contact.role}</p>
              <p>
                Email:{" "}
                <a href={`mailto:${contact.email}`} className="text-blue-500">
                  {contact.email}
                </a>
              </p>
              <p>
                Phone: <span className="text-blue-500">{contact.phone}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Info;
