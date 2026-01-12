function Badge({ label, value }) {
  return (
    <div style={{
      border: "1px solid #079c45ff",
      padding: "10px",
      margin: "8px",
      borderRadius: "6px",
      width: "200px"
    }}>
      <strong>{label}:</strong> {value}
    </div>
  );
}

export default Badge;
