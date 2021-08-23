import React from "react";

const CourseRegister = () => (
<div>
<h1>Summer Vacation</h1>
    <form>
        <fieldset>
            <legend>apply</legend>
            <ul>
                <li>
                    <label class="reg" for="id">Student ID</label>
                    <input type="text" id="id" placeholder="No Hyphen" autofocus />
                </li>
                <li>
                    <label class="reg" for="name">Name</label>
                    <input type="text" id="name"/>
                </li>
                <li>
                    <label class="reg" for="class">Department</label>
                    <select id="class">
                        <optgroup label="Institute of Technology">
                            <option value="archi">Architecture</option>
                            <option value="mechanic">mechanical engineering</option>
                            <option value="indust">indust</option>
                            <option value="elec">elec</option>
                            <option value="computer">computer</option>
                            <option value="chemical">chemistry</option>
                        </optgroup>
                        <optgroup label="College of Liberal Arts"/>
                            <option value="HISTORY">History</option>
                            <option value="language ">Language </option>
                            <option value="Philosophy">Philosophy</option>
                    </select>
                </li>
            </ul>
        </fieldset>
        <fieldset>
            <legend>Select Subject</legend>
            <ul>
                <li>
                    <span class="reg">interest</span>
                    <label for="interest"></label>
                    <input type="text" id="interest" list="choices"/>
                    <datalist id="choices">
                        <option value="grammer" label="Grammer"></option>
                        <option value="voca" label="Voca"></option>
                        <option value="speaking" label="Speaking"></option>
                        <option value="listening" label="Listening"></option>
                        <option value="news" label="News"></option>
                    </datalist>
                </li>
            </ul>
        </fieldset>
    </form>
</div>
)

export default CourseRegister;