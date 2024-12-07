document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart').getContext('2d');
    const incomeInputs = Array.from(document.querySelectorAll('[id^="income"]'));
    const expensesInputs = Array.from(document.querySelectorAll('[id^="expenses"]'));

    function getInputValues(inputs) {
        return inputs.map(input => parseFloat(input.value) || 0);
    }

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: getInputValues(incomeInputs),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, {
                label: 'Expenses',
                data: getInputValues(expensesInputs),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    incomeInputs.concat(expensesInputs).forEach(input => {
        input.addEventListener('input', () => {
            myChart.data.datasets[0].data = getInputValues(incomeInputs);
            myChart.data.datasets[1].data = getInputValues(expensesInputs);
            myChart.update();
        });
    });
});
