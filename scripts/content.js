var word = "monkey",
    queue = [document.body],
    curr
    ;
while (curr = queue.pop()) {
    if (!curr.textContent.match(word)) continue;
    for (var i = 0; i < curr.childNodes.length; ++i) {
        switch (curr.childNodes[i].nodeType) {
            case Node.TEXT_NODE: // 3
                if (curr.childNodes[i].textContent.match(word)) {
                    alert("This page contains monkeys!");
                    queue = "";
                }
                break;
            case Node.ELEMENT_NODE: // 1
                queue.push(curr.childNodes[i]);
                break;
        }
    }
}