import { useState } from "react";

const Banking = () => {
    let [money, setMoney] = useState(0);
    const pay = () => {
        money += Number(document.querySelector('#inputMoney').value);
        setMoney(money);
        document.querySelector('#outputMoney').innerHTML = `${money}€`;
    }
    const spend = () => {
        money -= Number(document.querySelector('#inputMoney').value);
        setMoney(money);
        document.querySelector('#outputMoney').innerHTML = `${money}€`;
    }
    return (
        <div>
            <form action="" className="konto">
                <h2>Dein Girokonto</h2>
                <h3 id="outputMoney" className="saldo">0€</h3>
                <input type="text" name="" id="inputMoney" placeholder="Gib einen Geldbetrag ein" required className="geldbetrag" />
                <div>
                    <input type="button" value="Einzahlen" className="einzahlen" onClick={pay} />
                    <input type="button" value="Auszahlen" className="auszahlen" onClick={spend} />
                </div>
            </form>
        </div>
    );
}

export default Banking;