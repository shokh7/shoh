import { useState } from 'react'
import './multisel.css'


function Multi() {




    return (
        <>
            <body>

                <div class="container">
                    <p class="selection">Please, select your food</p>
                    <ul>
                        <li>
                            <input type="checkbox" id="check-all" class="food" />
                            <label htmlFor="check-all">Check all</label>
                        </li>
                        <li>
                            <input type="checkbox" id="ice-cream" class="food" />
                            <label htmlFor="ice-cream">Ice-cream</label>
                        </li>
                        <li>
                            <input type="checkbox" id="hot-dog" class="food" />
                            <label htmlFor="hot-dog">Hot-dog</label>
                        </li>
                        <li>
                            <input type="checkbox" id="popcorn" class="food" />
                            <label htmlFor="popcorn">Popcorn</label>
                        </li>
                        <li>
                            <input type="checkbox" id="cookie" class="food" />
                            <label htmlFor="cookie">Cookie</label>
                        </li>
                    </ul>
                </div>
            </body>
        </>
    )
}

export default Multi
