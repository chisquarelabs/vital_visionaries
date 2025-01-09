const DashBoard = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe
        title="Power BI Report"
        width="100%"
        height="100%"
        src="https://app.powerbi.com/reportEmbed?reportId=01f1864f-d1e8-4fba-b08e-81a81a579e48&autoAuth=true&ctid=7da53e22-2540-442f-b4ad-21b668d91e5d"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default DashBoard;
