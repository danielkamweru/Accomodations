const enquiries = [
  { id: 1, name: "Alice Njeri", email: "alice@email.com", phone: "+254 712 345 678", message: "I'm interested in 56 Muhoya Avenue. Can I schedule a viewing?", date: "2024-03-15", status: "New" },
  { id: 2, name: "James Otieno", email: "james@email.com", phone: "+254 723 456 789", message: "Please send me details about Pyramid Ridge development.", date: "2024-03-14", status: "New" },
  { id: 3, name: "Grace Muthoni", email: "grace@email.com", phone: "+254 734 567 890", message: "What payment plans are available for Apple Creek?", date: "2024-03-13", status: "Read" },
  { id: 4, name: "Peter Kamau", email: "peter@email.com", phone: "+254 745 678 901", message: "Would like to discuss investment opportunities.", date: "2024-03-12", status: "Replied" },
  { id: 5, name: "Mary Wambui", email: "mary@email.com", phone: "+254 756 789 012", message: "Can I get the brochure for Pyramid Palms?", date: "2024-03-11", status: "Replied" },
];

const AdminEnquiries = () => {
  return (
    <div>
      <h1 className="font-heading text-3xl font-light tracking-wide text-sidebar-foreground">Enquiries</h1>
      <p className="mt-1 font-body text-xs text-sidebar-foreground/50">Messages from website visitors</p>

      <div className="mt-8 overflow-hidden rounded-sm border border-sidebar-border">
        <table className="w-full">
          <thead>
            <tr className="border-b border-sidebar-border bg-sidebar-accent">
              {["Name", "Email", "Phone", "Message", "Date", "Status"].map((h) => (
                <th key={h} className="px-4 py-3 text-left font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-sidebar-foreground/50">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enquiries.map((e) => (
              <tr key={e.id} className="border-b border-sidebar-border transition-colors hover:bg-sidebar-accent/50">
                <td className="px-4 py-3 font-body text-sm font-medium text-sidebar-foreground">{e.name}</td>
                <td className="px-4 py-3 font-body text-xs text-sidebar-foreground/60">{e.email}</td>
                <td className="px-4 py-3 font-body text-xs text-sidebar-foreground/60">{e.phone}</td>
                <td className="max-w-[200px] truncate px-4 py-3 font-body text-xs text-sidebar-foreground/60">{e.message}</td>
                <td className="px-4 py-3 font-body text-xs text-sidebar-foreground/40">{e.date}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2 py-0.5 font-body text-[10px] font-semibold uppercase ${
                    e.status === "New" ? "bg-sidebar-primary/20 text-sidebar-primary" : e.status === "Read" ? "bg-sidebar-foreground/10 text-sidebar-foreground/50" : "bg-green-500/20 text-green-400"
                  }`}>
                    {e.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminEnquiries;
