import React, { useReducer } from 'react';

const types = ['足し算', '引き算', '割り算', '掛け算'];

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'change': {
      return { ...state, [payload.name]: payload.value };
    }
    case '足し算': {
      return { ...state, result: state.a + state.b };
    }
    case '引き算': {
      return { ...state, result: state.a - state.b };
    }
    case '割り算': {
      return { ...state, result: state.a / state.b };
    }
    case '掛け算': {
      return { ...state, result: state.a * state.b };
    }
    default:
      throw new Error('不明なタイプです。');
  }
};

const TestReducer = ({ title }) => {
  const init = {
    a: 1,
    b: 2,
    result: 0,
    type: '足し算', // 初期計算タイプ
  };

  const [state, dispatch] = useReducer(reducer, init);

  const onClickChange = (e) => {
    dispatch({
      type: 'change',
      payload: { name: e.target.name, value: parseFloat(e.target.value) },
    });
  };

  const calc = (e) => {
    const selectedType = e.target.value;
    dispatch({ type: selectedType });
  };

  return (
    <>
      <div className='container'>
        <h2>{title}</h2>
        <label htmlFor='a'>number A</label>
        <input
          type='number'
          name='a'
          id='a'
          value={state.a}
          onChange={onClickChange}
        />
        <label htmlFor='b'>number B</label>
        <input
          type='number'
          name='b'
          id='b'
          value={state.b}
          onChange={onClickChange}
        />
        <select value={state.type} onChange={calc}>
          {types.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>

        <p>結果: {state.result}</p>
      </div>
    </>
  );
};

export default TestReducer;
