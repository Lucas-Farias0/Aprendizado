import { useState } from 'react';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();

    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (!pesoNum || !alturaNum || alturaNum <= 0) {
      alert('Por favor, insira valores válidos.');
      return;
    }
    //expressão que calcula o imc
    const resultado = pesoNum / (alturaNum * alturaNum);
    setImc(resultado.toFixed(2));

    if (resultado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (resultado >= 18.5 && resultado < 25) {
      setClassificacao('Peso normal');
    } else if (resultado >= 25 && resultado < 30) {
      setClassificacao('Sobrepeso');
    } else if (resultado >= 30 && resultado < 35) {
      setClassificacao('Obesidade Grau I');
    } else if (resultado >= 35 && resultado < 40) {
      setClassificacao('Obesidade Grau II');
    } else {
      setClassificacao('Obesidade Grau III');
    }
  };
  //limpa os campos para um novo calculo
  const limpar = () => {
    setPeso('');
    setAltura('');
    setImc(null);
    setClassificacao('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', fontFamily: 'sans-serif', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Calculadora de IMC</h2>
      
      <form onSubmit={calcularIMC}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Peso (kg):</label>
          <input 
            type="number" 
            step="0.1" 
            placeholder="Ex: 70" 
            value={peso} 
            onChange={(e) => setPeso(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Altura (m):</label>
          <input 
            type="number" 
            step="0.01" 
            placeholder="Ex: 1.75" 
            value={altura} 
            onChange={(e) => setAltura(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit" style={{ flex: 1, padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Calcular
          </button>
          <button type="button" onClick={limpar} style={{ flex: 1, padding: '10px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Limpar
          </button>
        </div>
      </form>

      {imc && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '4px', textAlign: 'center' }}>
          <h3>Resultado</h3>
          <p style={{ fontSize: '18px', margin: '5px 0' }}>Seu IMC: <strong>{imc}</strong></p>
          <p style={{ fontSize: '16px', margin: '5px 0' }}>Classificação: <strong>{classificacao}</strong></p>
        </div>
      )}
    </div>
  );
}

export default App;