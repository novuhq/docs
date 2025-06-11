'use server';

import clsx from 'clsx';

import Link from 'next/link';

import { SystemStatusType, getSystemsStatus } from '@/lib/get-systems-status';

const statusThemes = {
  up: {
    text: 'All systems operational',
    className: 'before:bg-[#22C358]',
    values: ['up'],
  },
  down: {
    text: 'Some of the services are down',
    className: 'before:bg-[#DE5835]',
    values: ['down'],
  },
  maintenance: {
    text: 'Ongoing maintenance on some services',
    className: 'before:bg-[#F1B64C]',
    values: ['maintenance', 'paused', 'pending', 'validating'],
  },
  fetchFailed: {
    text: 'Failed to fetch some services',
    className: 'before:bg-[#666666]',
    values: [''],
  },
};

async function Status() {
  let allStatuses: SystemStatusType[] = [];
  try {
    allStatuses = await getSystemsStatus();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Failed to load system status', err);
  }

  let currentStatus = statusThemes.fetchFailed;

  if (allStatuses.length > 0) {
    const statuses = allStatuses.map((s) => s.status);

    if (statuses.some((status) => statusThemes.down.values.includes(status))) {
      currentStatus = statusThemes.down;
    } else if (statuses.some((status) => statusThemes.maintenance.values.includes(status))) {
      currentStatus = statusThemes.maintenance;
    } else if (statuses.every((status) => status === 'up')) {
      currentStatus = statusThemes.up;
    }
  }

  return (
    <Link
      className={clsx(
        'relative font-inter inline-block py-2 mt-8 pl-[12px] pr-3.5 text-sm leading-snug tracking-[-0.02em] text-[#333333] dark:text-[#E6E6E6] transition-opacity duration-200',
        'before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full',
        'hover:opacity-90 focus-visible:opacity-90',
        currentStatus.className
      )}
      href="https://novustatus.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      {currentStatus.text}
    </Link>
  );
}

export default Status;
