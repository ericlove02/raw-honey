console.log("seeking price");
// word - what to find; queue - what to search
var word = "total",
    queue = [document.body],
    curr
    ;
while (curr = queue.pop()) {
    if (!curr.textContent.includes(word)) continue;
    for (var i = 0; i < curr.childNodes.length; ++i) {
        switch (curr.childNodes[i].nodeType) {
            case Node.TEXT_NODE: // 3
                if (curr.childNodes[i].textContent.includes(word)) {
                    console.log("This page contains " + word);

                    // HTML of the popup that will show when the content is found
                    var popupHTML = "<div style='position:fixed;top:0;right:0;z-index:999;color:red'>THERE IS A MONKEY</div>";
                    var stack = document.getElementsByTagName('body')[0];
                    stack.insertAdjacentHTML('beforeend', popupHTML);

                    // clear the queue cause we have found what we need and are done
                    queue = "";

                    var totalText = document.getElementsByClassName('grand-total-price')[0];
                    var total = parseFloat(totalText.textContent.trim().substring(1));

                    console.log(total);
                }
                break;
            case Node.ELEMENT_NODE: // 1
                queue.push(curr.childNodes[i]);
                // console.log("searching : " + curr.childNodes[i]);
                break;
        }
    }
}