import { Subscription } from 'rxjs';
/**
 * Utility for managing subscriptions till unsubscribed at ngOnDestroy.
 * Inspired from: Subsink package (https://github.com/wardbell/subsink)
 */
export class Subscriptor {
    /**
     * Subscription array to hold Observable subscriptions
     * until unsubscribe() called at ngOnDestroy.
     */
    private subsciptionArray: Subscription[] = [];
    constructor() { }
    /**
     * Add an array of subscriptions to destroy later;
     */
    public addAsArray(...subscriptions: Subscription[]): void {
        this.subsciptionArray = this.subsciptionArray.concat(subscriptions);
    }
    /**
     * Add a subscription to destroy later;
     */
    set add(subscription: Subscription) {
        this.subsciptionArray.push(subscription);
    }
    /**
     * Destroying all active subscriptions by calling the unsubscribe() method on them.
     */
    public clear(): void {
        this.subsciptionArray.forEach(sub => {
            if (sub?.unsubscribe) { sub.unsubscribe(); }
        });
        this.subsciptionArray = [];
    }
}
