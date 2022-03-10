const formPriority = document.querySelector('#form-priority');
formPriority.addEventListener('change', changeFilterValue);

const formWho = document.querySelector('#form-who');
formWho.addEventListener('change', changeFilterValue);

const formDifficulty = document.querySelector('#form-difficulty');
formDifficulty.addEventListener('change', changeFilterValue);

const sheets = document.querySelectorAll('[data-type="sheet"]');
const urlParams = new URLSearchParams(window.location.search);

let filters = {
    'priority': urlParams.get('priority'),
    'difficulty': urlParams.get('difficulty'),
    'who': urlParams.get('who'),
};

formPriority.value = filters.priority ? filters.priority : '';
formDifficulty.value = filters.difficulty ? filters.difficulty : '';
formWho.value = filters.who ? filters.who : '';

updateSheetsList();

function changeFilterValue(event) {
    const filterName = event.target.name;
    const filterValue = event.target.value;

    filters[filterName] = filterValue;

    var queryParams = new URLSearchParams(window.location.search);
    queryParams.set('priority', filters.priority ? filters.priority : '');
    queryParams.set('difficulty', filters.difficulty? filters.difficulty : '');
    queryParams.set('who', filters.who ? filters.who : '');
    history.pushState(null, null, '?' + queryParams.toString());

    location.href = '#bonnes-pratiques-strategie-et-gouvernance';
    
    updateSheetsList();
}

function updateSheetsList()
{
    sheets.forEach(function (sheet) {
        sheet.hidden = false;
    });
    
    sheets.forEach(function (sheet) {
        for (const filterName in filters) {
            if (filters[filterName] && !sheet.getAttribute('data-' + filterName).includes(filters[filterName])) {
                sheet.hidden = true;
            }
        }
    });
}