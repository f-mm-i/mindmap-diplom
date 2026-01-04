import { logEvent, Analytics } from "firebase/analytics";
import { analyticsPromise } from "@/src/services/firebase";

const logAnalyticsEvent = async (eventName: string, eventParams?: Record<string, any>): Promise<void> => {
    const analytics: Analytics | null = await analyticsPromise;
    if (!analytics) {
        console.warn(`Analytics not supported. Event "${eventName}" was not logged.`);
        return;
    }

    logEvent(analytics, eventName, eventParams);
};

export { logAnalyticsEvent };
