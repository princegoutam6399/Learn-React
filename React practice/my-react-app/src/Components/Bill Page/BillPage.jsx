import React from 'react'

const BillPage = () => {

    const generateBill = () => {
        let amt = 0;
        for (let i = 0; i <= 4; i++) {
            const checkbox = document.getElementById('item' + i);
            if (checkbox && checkbox.checked) {
                amt = amt + parseInt(checkbox.value);
            }
        }
        document.getElementById('output').innerHTML = 'Total Bill : ' + amt;
    }

    const resetBill=()=>{
        for(let i=0;i<=4;i++){
            const checkbox = document.getElementById('item'+i);
            if(checkbox){
                checkbox.checked = false;
            }
        }
        document.getElementById('output').innerHTML = '';
    }

    return (
        <div>
            <div className="bill-page mt-4">
                <h2>Bill Page</h2>
                <div className="item mt-2">
                   <h4> 1.Cold Crink @99 <input type="checkbox" id="item1" value={99} /></h4>
                   <h4> 2.Burger @199 <input type="checkbox" id="item2" value={199} /></h4>
                   <h4> 3.Pizaa @299 <input type="checkbox" id="item3" value={299} /></h4>
                   <h4> 4.Snacks @39 <input type="checkbox" id="item4" value={39} /></h4>
                    <input type="submit" value="GenerateBill" className='btn btn-outline-dark m-1' onClick={generateBill} />
                    <input type="submit" value="Reset" className='btn btn-outline-dark m-1' onClick={resetBill} />
                    <h3 id="output"></h3>
                </div>
            </div>
        </div>
    )
}

export default BillPage