import { useEffect, useRef, useState, RefObject } from 'react';

interface UseIntersectionObserverOptions {
    readonly threshold?: number;
    readonly rootMargin?: string;
    readonly triggerOnce?: boolean;
}

interface UseIntersectionObserverReturn {
    readonly elementRef: RefObject<HTMLDivElement | null>;
    readonly isIntersecting: boolean;
}

export const useIntersectionObserver = (
    options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn => {
    const {
        threshold = 0.1,
        rootMargin = '0px',
        triggerOnce = true
    } = options;

    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
    const [hasTriggered, setHasTriggered] = useState<boolean>(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]: IntersectionObserverEntry[]) => {
                const isVisible: boolean = entry.isIntersecting;

                if (isVisible && (!triggerOnce || !hasTriggered)) {
                    setIsIntersecting(true);
                    setHasTriggered(true);
                } else if (!triggerOnce) {
                    setIsIntersecting(isVisible);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return (): void => {
            observer.unobserve(element);
        };
    }, [threshold, rootMargin, triggerOnce, hasTriggered]);

    return { elementRef, isIntersecting } as const;
}; 