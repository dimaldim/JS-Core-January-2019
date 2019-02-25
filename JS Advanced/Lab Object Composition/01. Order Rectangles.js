function orderRectangles(data) {
    let rects = [];
    for (let [width, height] of data) {
        let rect = comparator(width, height);
        rects.push(rect);
    }

    rects.sort((a, b) => a.compareTo(b));

    return rects;

    function comparator(w, h) {

        let rect = {
            width: w,
            height: h,
            area: () => rect.width * rect.height,
            compareTo: function (other) {

                let result = other.area() - rect.area();

                return result || (other.width - rect.width);
            }
        };
        return rect;
    }
}