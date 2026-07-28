export default function HomePage() {
  return (
    <>
      <main className="lux-body">
        <div className="slide-canvas">
          <div className="header">
            <div>
              <h1>
                The <span className="gold-text">Big 4</span> Ecosystem
              </h1>
              <div className="subtitle">
                Structural Dynamics, Compensation, &amp; Career Progression
              </div>
            </div>
            <div className="confidential">
              STRICTLY CONFIDENTIAL
              <br />
              <span>EXECUTIVE SUMMARY</span>
            </div>
          </div>

          <div className="main-grid">
            <div className="column">
              <div className="card">
                <h2>The Network</h2>
                <div className="firm-container">
                  <div className="firm">DELOITTE</div>
                  <div className="firm">PwC</div>
                  <div className="firm">EY</div>
                  <div className="firm">KPMG</div>
                </div>
                <p className="mb-15">
                  <strong>The Partnership Model:</strong> Not single global corporations. They are
                  sprawling networks of independent, country-specific member firms.
                </p>
                <p>
                  <strong>Equity Ownership:</strong> Owned by Partners who buy in and share annual
                  profits, overseen by a global brand umbrella.
                </p>
              </div>

              <div className="card fill-height">
                <h2>Core Services</h2>
                <ul>
                  <li>
                    <strong>Audit &amp; Assurance:</strong> The regulatory backbone. Validating public
                    financial records.
                  </li>
                  <li>
                    <strong>Consulting:</strong> High-margin growth engine. Tech implementation &amp;
                    strategy.
                  </li>
                  <li>
                    <strong>Tax &amp; Legal:</strong> Global compliance, M&amp;A tax structuring, and
                    wealth management.
                  </li>
                  <li>
                    <strong>Deal Advisory:</strong> Due diligence for Private Equity and corporate
                    mergers.
                  </li>
                </ul>
              </div>
            </div>

            <div className="card ladder-section">
              <h2>
                The Corporate Ladder &amp; Compensation{" "}
                <span className="ladder-subtitle">(Avg. US Base + Bonus)</span>
              </h2>

              <div className="ladder-container">
                <div className="ladder-step">
                  <div>
                    <div className="step-title">Associate / Analyst</div>
                    <span className="step-years">Years 0 - 2</span>
                  </div>
                  <div className="step-pay">$75K - $95K</div>
                  <div className="step-details">
                    <strong>Role:</strong> Data crunching, testing controls, and deck creation. Heavy
                    grunt work.
                    <br />
                    <strong>Exit Ops:</strong> Financial Analyst, Jr. Consultant.
                  </div>
                </div>

                <div className="ladder-step">
                  <div>
                    <div className="step-title">Senior Associate</div>
                    <span className="step-years">Years 2 - 5</span>
                  </div>
                  <div className="step-pay">$100K - $140K</div>
                  <div className="step-details">
                    <strong>Role:</strong> Leading small teams, owning specific project deliverables,
                    coaching new hires.
                    <br />
                    <strong>Exit Ops:</strong> Senior FP&amp;A, Industry Manager.
                  </div>
                </div>

                <div className="ladder-step">
                  <div>
                    <div className="step-title">Manager</div>
                    <span className="step-years">Years 5 - 8</span>
                  </div>
                  <div className="step-pay">$150K - $200K</div>
                  <div className="step-details">
                    <strong>Role:</strong> Day-to-day project execution, billing management, direct
                    client liaison.
                    <br />
                    <strong>Exit Ops:</strong> Corporate Controller, Director of Strategy.
                  </div>
                </div>

                <div className="ladder-step">
                  <div>
                    <div className="step-title">Director / Sr. Manager</div>
                    <span className="step-years">Years 8 - 12+</span>
                  </div>
                  <div className="step-pay">$220K - $300K+</div>
                  <div className="step-details">
                    <strong>Role:</strong> Business development, managing massive portfolios, pitching to
                    C-Suite.
                    <br />
                    <strong>Exit Ops:</strong> VP of Finance, Tech Executive.
                  </div>
                </div>

                <div className="ladder-step">
                  <div>
                    <div className="step-title gold-title">Equity Partner / MD</div>
                    <span className="step-years">Years 12 - 15+</span>
                  </div>
                  <div className="step-pay">$400K - $1M++</div>
                  <div className="step-details">
                    <strong>Role:</strong> Firm owner. Purely focused on driving massive revenue,
                    enterprise risk, and legacy relationships.
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <h2>Target Clients</h2>
                <ul>
                  <li>
                    <strong>Fortune 500:</strong> Auditing &amp; advising ~80% of the world&apos;s
                    largest public entities.
                  </li>
                  <li>
                    <strong>Private Equity:</strong> Providing rapid M&amp;A due diligence for mega-funds.
                  </li>
                  <li>
                    <strong>Public Sector:</strong> Billion-dollar contracts in defense, infrastructure,
                    and health.
                  </li>
                </ul>
              </div>

              <div className="card fill-height">
                <h2>Choosing The Fit</h2>
                <div className="mb-15">
                  <strong>Prestige Nuances</strong>
                  <p className="small">
                    PwC traditionally dominates global Audit &amp; Banking. Deloitte is the undisputed
                    heavyweight in Tech Consulting &amp; Federal.
                  </p>
                </div>
                <div className="mb-15">
                  <strong>Work-Life Reality</strong>
                  <p className="small">
                    Expect 50-70+ hour weeks during &quot;Busy Season&quot; (Jan-April for Audit,
                    project-dependent for Consulting). High burnout, high reward.
                  </p>
                </div>
                <div>
                  <strong>The Golden Rule</strong>
                  <p className="small">
                    Culture is hyper-local. EY in New York may feel entirely different from EY in London.
                    Choose the specific office and team, not just the brand.
                  </p>
                </div>
              </div>
            </div>

            <div className="stats-row">
              <div className="stat-box">
                <div className="stat-value">1.5M+</div>
                <div className="stat-label">Global Employees Combined</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">$190B+</div>
                <div className="stat-label">Combined Annual Revenue</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">Up or Out</div>
                <div className="stat-label">Strict Promotion Culture</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">2 - 4 Yrs</div>
                <div className="stat-label">Average Employee Tenure</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,500;0,700;1,500&display=swap");
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        .lux-body {
          background-color: #121212;
          display: grid;
          place-items: center;
          min-height: 100vh;
          font-family: "Inter", sans-serif;
          color: #e0e0e0;
          padding: 20px;
        }
        .slide-canvas {
          width: 1920px;
          height: 1080px;
          background: linear-gradient(135deg, #0a0b10 0%, #171821 100%);
          position: relative;
          padding: 60px 80px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8);
        }
        .slide-canvas::before {
          content: "";
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 0;
        }
        .header {
          position: relative;
          z-index: 1;
          margin-bottom: 40px;
          border-bottom: 1px solid rgba(212, 175, 55, 0.3);
          padding-bottom: 20px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        h1 {
          font-family: "Playfair Display", serif;
          font-size: 64px;
          color: #ffffff;
          font-weight: 700;
          letter-spacing: -1px;
          line-height: 1.1;
        }
        .gold-text {
          color: #d4af37;
          font-style: italic;
        }
        .subtitle {
          font-size: 24px;
          color: #a0a0a0;
          font-weight: 300;
          margin-top: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .confidential {
          text-align: right;
          color: #666;
          font-size: 14px;
        }
        .confidential span {
          color: #d4af37;
        }
        .main-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 350px 1fr 350px;
          grid-template-rows: auto 1fr;
          gap: 30px;
          flex-grow: 1;
        }
        .column {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 30px;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: border-color 0.3s ease;
        }
        .card:hover {
          border-color: rgba(212, 175, 55, 0.4);
        }
        .fill-height {
          flex-grow: 1;
        }
        h2 {
          font-family: "Playfair Display", serif;
          font-size: 28px;
          color: #d4af37;
          margin-bottom: 20px;
          font-weight: 500;
        }
        p,
        li {
          font-size: 16px;
          line-height: 1.6;
          color: #b3b3b3;
        }
        ul {
          list-style: none;
          padding-left: 0;
        }
        li {
          margin-bottom: 15px;
          position: relative;
          padding-left: 20px;
        }
        li::before {
          content: "♦";
          color: #d4af37;
          position: absolute;
          left: 0;
          font-size: 12px;
          top: 2px;
        }
        strong {
          color: #ffffff;
          font-weight: 600;
        }
        .firm-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-bottom: 25px;
        }
        .firm {
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          padding: 15px 0;
          border-radius: 8px;
          font-weight: 600;
          font-size: 18px;
          letter-spacing: 1px;
          color: #fff;
        }
        .ladder-section {
          grid-column: 2;
          grid-row: 1 / span 2;
          display: flex;
          flex-direction: column;
        }
        .ladder-subtitle {
          font-size: 14px;
          font-family: "Inter", sans-serif;
          color: #888;
        }
        .ladder-container {
          display: flex;
          flex-direction: column-reverse;
          gap: 15px;
          margin-top: 10px;
          flex-grow: 1;
        }
        .ladder-step {
          background: linear-gradient(90deg, rgba(20, 22, 30, 0.9) 0%, rgba(30, 34, 45, 0.9) 100%);
          border-left: 4px solid #d4af37;
          border-radius: 4px 12px 12px 4px;
          padding: 20px 30px;
          display: grid;
          grid-template-columns: 2fr 1fr 2fr;
          align-items: center;
          gap: 20px;
          position: relative;
        }
        .ladder-step:nth-child(1) {
          width: 100%;
          border-color: #d4af37;
        }
        .ladder-step:nth-child(2) {
          width: 95%;
          border-color: #c5a333;
        }
        .ladder-step:nth-child(3) {
          width: 90%;
          border-color: #b6972e;
        }
        .ladder-step:nth-child(4) {
          width: 85%;
          border-color: #a78b2a;
        }
        .ladder-step:nth-child(5) {
          width: 80%;
          border-color: #987f25;
        }
        .step-title {
          font-size: 22px;
          font-weight: 600;
          color: #ffffff;
        }
        .gold-title {
          color: #d4af37;
        }
        .step-years {
          font-size: 14px;
          color: #a0a0a0;
          display: block;
          margin-top: 4px;
        }
        .step-pay {
          font-family: "Playfair Display", serif;
          font-size: 26px;
          color: #d4af37;
          font-weight: 700;
          text-align: center;
          background: rgba(0, 0, 0, 0.4);
          padding: 10px;
          border-radius: 8px;
        }
        .step-details {
          font-size: 14px;
          color: #b3b3b3;
          line-height: 1.4;
        }
        .stats-row {
          grid-column: 1 / span 3;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 10px;
        }
        .stat-box {
          background: rgba(255, 255, 255, 0.01);
          border-top: 2px solid rgba(212, 175, 55, 0.3);
          padding: 20px;
          text-align: center;
        }
        .stat-value {
          font-family: "Playfair Display", serif;
          font-size: 32px;
          color: #ffffff;
          margin-bottom: 5px;
        }
        .stat-label {
          font-size: 13px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .small {
          font-size: 14px;
        }
        .mb-15 {
          margin-bottom: 15px;
        }
      `}</style>
    </>
  );
}
