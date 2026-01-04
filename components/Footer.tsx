export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ marginTop: 48, padding: "24px 0", borderTop: "1px solid #eee" }}>
      <small>© {year} Markanović d.o.o.</small>
    </footer>
  );
}
