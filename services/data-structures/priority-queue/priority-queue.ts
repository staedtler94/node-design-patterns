
export class Priority_Queue<T> {
    private queue: T[];
    private compare: (a: T, b: T) => number;

    constructor(compare: (a: T, b: T) => number) {
        this.queue = [];
        this.compare = compare;
    }

    public enqueue(item: any) {
        this.queue.push(item);
        this.queue.sort(this.compare);
    }

    public dequeue() {
        return this.queue.shift();
    }

    public peek() {
        return this.queue[0];
    }

    public size() {
        return this.queue.length;
    }

    public isEmpty() {
        return this.queue.length === 0;
    }
}