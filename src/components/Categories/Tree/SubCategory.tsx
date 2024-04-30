export const SubCategory = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",      
        paddingLeft: "30px",
        backgroundColor: "#FAFAFF",
        borderRadius: "8px",
        // gap: "1px !important",
      }}
    >
      {children}
    </div>
  );
};


