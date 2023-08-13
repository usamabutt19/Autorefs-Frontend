export const Icon = ({ src, alt, width, color }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: !!width ? width : '20px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img src={src} alt={!!alt ? alt : ''} />
    </div>
  );
};
