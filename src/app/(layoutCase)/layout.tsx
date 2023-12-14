export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      layoutCase 레이아웃
      {children}
      {modal}
    </div>
  );
}
