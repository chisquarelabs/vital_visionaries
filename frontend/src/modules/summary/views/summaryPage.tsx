import "../style.css";

export default function SummaryPage({ scoreDetails }: any) {
  return (
    <table
      className="table-container"
      style={{ width: "100%", marginTop: "16px", borderCollapse: "collapse" }}
    >
      <thead>
        <tr>
          <th
            className=" bg-gray-50 h-10"
            colSpan={6}
            style={{ textAlign: "center" }}
          >
            Summary
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Section</th>
          <th>Sub Section</th>
          <th>Score</th>
          <th className="text-center" colSpan={3}>
            Flags
          </th>
        </tr>
        <tr>
          <th>Medical History</th>
          <th> </th>
          <th></th>
          <td>Cancer</td>
          <td>Stroke</td>
          <td>Cardiac Problems</td>
        </tr>
        <tr>
          <th>Founding Assessments</th>
          <td>
            <table  style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th style={{ border: "none" }}>Personal Wellbeing</th>
                </tr>
                <tr>
                  <th style={{ border: "none" }}>Social Well- Being</th>
                </tr>
                <tr>
                  <th style={{ border: "none" }}>Hobbies and Interests</th>
                </tr>
                <tr>
                  <th style={{ border: "none" }}>Outdoor activities and engagement</th>
                </tr>
              </tbody>
            </table>
          </td>
          <td>
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ border: "none" }}>{scoreDetails?.personalScore || 0} Out of 3</td>
                </tr>
                <tr>
                  <td style={{ border: "none" }}>{scoreDetails?.socialScore || 0} Out of 3</td>
                </tr>
                <tr>
                  <td style={{ border: "none" }}>{scoreDetails?.hobbiesScore || 0} Out of 2</td>
                </tr>
                <tr>
                  <td style={{ border: "none" }}>{scoreDetails?.activityScore || 0} Out of 3</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>Behavioural Assessments</th>
          <td></td>
          <td>{scoreDetails?.behavioralsScore || 0} Out of 10</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>Cognition Assessments</th>
          <td></td>
          <td>{scoreDetails?.cognitionScore || 0} Out of 10</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
