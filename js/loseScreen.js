'use strict';

let leadersTable = document.getElementById('leaders').tBodies[0],
    leaders = JSON.parse(localStorage.getItem('leaders'));

/* Sort array */
leaders.sort((prev, next) => prev.points - next.points );
leaders.reverse();

/* Remove unnecessary results */
leaders = leaders.slice(0, 10);

/* Display results */
leaders.forEach((leader, index) => {

    leadersTable.innerHTML = leadersTable.innerHTML +
        `
        <tr>
            <td>${index+1}</td>
            <td>${leader.name}</td>
            <td>${leader.points}</td>
        </tr>
        `;

});