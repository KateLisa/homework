< form >
    <
    input class = "place_for_search"
type = "text"
id = "text-to-find"
value = ""
placeholder = "Search"
autofocus >
    <
    input class = "button_for_turn_back"
type = "button"
onclick = "javascript: FindOnPage('text-to-find',false); return false;"
value = " "
title = "Отменить поиск" >
    <
    input class = "button_for_search"
type = "submit"
onclick = "javascript: FindOnPage('text-to-find',true); return false;"
value = " "
title = "Начать поиск" >
    <
    /form>