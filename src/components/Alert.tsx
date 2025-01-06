import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import {
  CircleCheckIcon,
  CircleXIcon,
  InfoIcon,
  TriangleAlertIcon,
} from 'lucide-react';
import { JSX } from 'react';

type AlertType = 'info' | 'warning' | 'error' | 'success';

type AlertProps = {
  type: AlertType;
  title: string;
  messages: string[];
};

export default function Alert({
  type = 'warning',
  title,
  messages,
}: AlertProps) {
  const containerVariants = cva('rounded-md bg-opacity-10 p-4', {
    variants: {
      type: {
        info: 'bg-blue-500',
        warning: 'bg-yellow-500',
        error: 'bg-red-500',
        success: 'bg-green-500',
      },
    },
  });

  const iconVariants = cva('size-5', {
    variants: {
      type: {
        info: 'text-blue-700 dark:text-blue-300',
        warning: 'text-yellow-700 dark:text-yellow-300',
        error: 'text-red-700 dark:text-red-300',
        success: 'text-green-700 dark:text-green-300',
      },
    },
  });

  const titleVariants = cva('font-semibold', {
    variants: {
      type: {
        info: 'text-blue-900 dark:text-blue-100',
        warning: 'text-yellow-900 dark:text-yellow-100',
        error: 'text-red-900 dark:text-red-100',
        success: 'text-green-900 dark:text-green-100',
      },
    },
  });

  const messageVariants = cva('mt-2 text-sm', {
    variants: {
      type: {
        info: 'text-blue-700 dark:text-blue-300',
        warning: 'text-yellow-700 dark:text-yellow-300',
        error: 'text-red-700 dark:text-red-300',
        success: 'text-green-700 dark:text-green-300',
      },
    },
  });

  const ICON_MAP: Record<AlertType, JSX.Element> = {
    info: (
      <InfoIcon aria-hidden='true' className={cn(iconVariants({ type }))} />
    ),
    warning: (
      <TriangleAlertIcon
        aria-hidden='true'
        className={cn(iconVariants({ type }))}
      />
    ),
    error: (
      <CircleXIcon aria-hidden='true' className={cn(iconVariants({ type }))} />
    ),
    success: (
      <CircleCheckIcon
        aria-hidden='true'
        className={cn(iconVariants({ type }))}
      />
    ),
  };

  return (
    <div className={cn(containerVariants({ type }))}>
      <div className='flex'>
        <div className='shrink-0'>{ICON_MAP[type]}</div>
        <div className='ml-3'>
          <h3 className={cn(titleVariants({ type }))}>{title}</h3>

          {messages.length ? (
            <div className={cn(messageVariants({ type }))}>
              {messages.length > 1 ? (
                <ul role='list' className='list-disc space-y-1 pl-5'>
                  {messages.map((message) => (
                    <li key={message}>{message}</li>
                  ))}
                </ul>
              ) : (
                <p>{messages[0]}</p>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
