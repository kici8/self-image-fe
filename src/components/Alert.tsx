import { XCircleIcon } from '@heroicons/react/20/solid';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import { cva, cx } from 'class-variance-authority';
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
  const containerVariants = cva('rounded-md p-4', {
    variants: {
      type: {
        info: 'bg-blue-50',
        warning: 'bg-yellow-50',
        error: 'bg-red-50',
        success: 'bg-green-50',
      },
    },
  });

  const iconVariants = cva('size-5', {
    variants: {
      type: {
        info: 'text-blue-400',
        warning: 'text-yellow-400',
        error: 'text-red-400',
        success: 'text-green-400',
      },
    },
  });

  const titleVariants = cva('font-semibold', {
    variants: {
      type: {
        info: 'text-blue-800',
        warning: 'text-yellow-800',
        error: 'text-red-800',
        success: 'text-green-800',
      },
    },
  });

  const messageVariants = cva('mt-2 text-sm', {
    variants: {
      type: {
        info: 'text-blue-700',
        warning: 'text-yellow-700',
        error: 'text-red-700',
        success: 'text-green-700',
      },
    },
  });

  const ICON_MAP: Record<AlertType, JSX.Element> = {
    info: (
      <XCircleIcon aria-hidden='true' className={cx(iconVariants({ type }))} />
    ),
    warning: (
      <ExclamationTriangleIcon
        aria-hidden='true'
        className={cx(iconVariants({ type }))}
      />
    ),
    error: (
      <XCircleIcon aria-hidden='true' className={cx(iconVariants({ type }))} />
    ),
    success: (
      <XCircleIcon aria-hidden='true' className={cx(iconVariants({ type }))} />
    ),
  };

  return (
    <div className={cx(containerVariants({ type }))}>
      <div className='flex'>
        <div className='shrink-0'>{ICON_MAP[type]}</div>
        <div className='ml-3'>
          <h3 className={cx(titleVariants({ type }))}>{title}</h3>

          {messages.length ? (
            <div className={cx(messageVariants({ type }))}>
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
