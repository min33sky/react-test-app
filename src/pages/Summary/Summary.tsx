import React, { useState } from 'react';

function Summary() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h1>Summary Page</h1>

      <input
        type="checkbox"
        id="confirm"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <label htmlFor="confirm">주문하려는 것을 확인하셨나요?</label>

      <button disabled={!checked}>주문 확인</button>
    </div>
  );
}

export default Summary;
