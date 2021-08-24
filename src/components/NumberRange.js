import React from 'react'

const NumberRange = () => (
    <>
    <form>
        <fieldset>
            <legend>info</legend>
            <ul>
                <li>
                    <label class="reg" for="member">Number of Participants<small>(max 10 people)</small></label>
                    <input type="number" id="member" value="1" min="0" max="10" step="1"/>
                </li>
                <li>
                    <label class="reg" for="stuffs">desired goods <small>(Up to 5)</small></label>
                    <input type="number" id="stuffs" value="1" min="0" max="50" step="5" size="5"/>
                </li>
                <li>
                    <label class="reg" for="satis">steps <small>(low, midium, high)</small></label>
                    <input type="range" id="satis" value="1" min="0" max="3"/>
                </li>
            </ul>
        </fieldset>
    </form>
    </>
)

export default NumberRange