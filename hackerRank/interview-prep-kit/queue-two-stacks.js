class Queue {
    constructor() {
        this.inbox = [],
        this.outbox = [];
    }
    
    enqueue(num) {
        this.inbox.push(num)
    }
    
    dequeue() {
        if (this.outbox.length == 0) {
            while(this.inbox.length !== 0) {
                this.outbox.push(this.inbox.pop())
            }
        } 
        if (this.outbox.length == 0) {
            throw Error("Nothing to dequeue")
        }
        this.outbox.pop()
    }
    
    peek() {
        if (this.outbox.length == 0) {
            while(this.inbox.length !== 0) {
                this.outbox.push(this.inbox.pop())
            }
        } 
        if (this.outbox.length == 0) {
            throw Error("Nothing to dequeue")
        }
        console.log(this.outbox[this.outbox.length-1])
    } 
}

function processData(input) {
    //Enter your code here
    let queue = new Queue();
    let queries = input.split('\n')
    for (let i = 1; i < queries.length; i++) {
        let instruction = queries[i].split(' ')
        if (instruction[0] == 1) {
            queue.enqueue(instruction[1])
        }
        else if (instruction[0] == 2) {
            queue.dequeue()
        } 
        else if (instruction[0] == 3) {
            queue.peek()
        }
    }  
} 
