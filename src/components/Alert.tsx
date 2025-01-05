import { XCircleIcon } from '@heroicons/react/20/solid';
import { clsx } from 'clsx';

type AlertType = 'info' | 'warning' | 'error' | 'success';

type AlertProps = {
  type: AlertType;
  title: string;
  messages: string[];
};

type AlertTypeClassesMap = {
  container: string;
  icon: string;
  title: string;
  message: string;
};

export default function Alert({
  type = 'warning',
  title,
  messages,
}: AlertProps) {
  const CONTAINER_TYPE_MAP: Record<AlertType, AlertTypeClassesMap> = {
    info: {
      container: clsx('rounded-md bg-blue-50 p-4'),
      icon: clsx('size-5 text-blue-400'),
      title: clsx('font-semibold text-blue-800'),
      message: clsx('mt-2 text-sm text-blue-700'),
    },
    warning: {
      container: clsx('rounded-md bg-yellow-50 p-4'),
      icon: clsx('size-5 text-yellow-400'),
      title: clsx('font-semibold text-yellow-800'),
      message: clsx('mt-2 text-sm text-yellow-700'),
    },
    error: {
      container: clsx('rounded-md bg-red-50 p-4'),
      icon: clsx('size-5 text-red-400'),
      title: clsx('font-semibold text-red-800'),
      message: clsx('mt-2 text-sm text-red-700'),
    },
    success: {
      container: clsx('rounded-md bg-green-50 p-4'),
      icon: clsx('size-5 text-green-400'),
      title: clsx('font-semibold text-green-800'),
      message: clsx('mt-2 text-sm text-green-700'),
    },
  };

  return (
    <div className={CONTAINER_TYPE_MAP[type].container}>
      <div className='flex'>
        <div className='shrink-0'>
          <XCircleIcon
            aria-hidden='true'
            className={CONTAINER_TYPE_MAP[type].icon}
          />
        </div>
        <div className='ml-3'>
          <h3 className={CONTAINER_TYPE_MAP[type].title}>{title}</h3>

          {messages.length ? (
            <div className={CONTAINER_TYPE_MAP[type].message}>
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
