'use client';

import { useMemo, useState } from 'react';
import { cn } from '@/lib/cn';

type PlanId = 'free' | 'pro' | 'team';

type Plan = {
  id: PlanId;
  name: string;
  monthlyPrice: number;
  includedConversations: number;
  overageRate: number | null;
  agents: number | 'Unlimited';
  channels: string;
};

const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    monthlyPrice: 0,
    includedConversations: 100,
    overageRate: null,
    agents: 2,
    channels: '2',
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 30,
    includedConversations: 1000,
    overageRate: 0.02,
    agents: 5,
    channels: '5',
  },
  {
    id: 'team',
    name: 'Team',
    monthlyPrice: 250,
    includedConversations: 5000,
    overageRate: 0.015,
    agents: 10,
    channels: 'All available',
  },
];

const MAX_CONVERSATIONS = 20000;
const FREE_TO_PRO_THRESHOLD = 300;
const PRO_TEAM_TO_FREE_THRESHOLD = 100;

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}

export function ConnectPricingCalculator(): React.ReactElement {
  const [selectedPlanId, setSelectedPlanId] = useState<PlanId>('pro');
  const [conversations, setConversations] = useState(1500);

  const selectedPlan = PLANS.find((plan) => plan.id === selectedPlanId) ?? PLANS[1];

  const estimate = useMemo(() => {
    const extraConversations = Math.max(0, conversations - selectedPlan.includedConversations);
    const overageCost =
      selectedPlan.overageRate === null ? 0 : extraConversations * selectedPlan.overageRate;
    const total = selectedPlan.monthlyPrice + overageCost;
    const isOverFreeLimit =
      selectedPlan.id === 'free' && conversations > selectedPlan.includedConversations;

    return {
      extraConversations,
      overageCost,
      total,
      isOverFreeLimit,
    };
  }, [conversations, selectedPlan]);

  function handleConversationsChange(value: number): void {
    const nextValue = Math.min(Math.max(0, value), MAX_CONVERSATIONS);

    setConversations(nextValue);
    setSelectedPlanId((currentPlanId) => {
      if (currentPlanId === 'free' && nextValue > FREE_TO_PRO_THRESHOLD) {
        return 'pro';
      }

      if (
        (currentPlanId === 'pro' || currentPlanId === 'team') &&
        nextValue < PRO_TEAM_TO_FREE_THRESHOLD
      ) {
        return 'free';
      }

      return currentPlanId;
    });
  }

  return (
    <div className="not-prose my-6 rounded-lg border bg-fd-card p-5 shadow-sm">
      <div className="mb-5">
        <h3 className="text-base font-medium text-fd-foreground">Estimate your monthly cost</h3>
        <p className="mt-1 text-sm text-fd-muted-foreground">
          Pick a plan and set how many active conversations you expect each billing cycle.
        </p>
      </div>

      <div className="mb-6">
        <p className="mb-2 text-sm font-medium text-fd-foreground">Plan</p>
        <div className="grid gap-2 sm:grid-cols-3">
          {PLANS.map((plan) => {
            const isSelected = plan.id === selectedPlanId;

            return (
              <button
                key={plan.id}
                type="button"
                onClick={() => setSelectedPlanId(plan.id)}
                className={cn(
                  'rounded-md border px-3 py-2 text-left transition-colors',
                  isSelected
                    ? 'border-[#4b73ec] bg-[#f3f6ff] dark:border-[#00d5ff] dark:bg-[#0f1a24]'
                    : 'border-fd-border hover:border-fd-muted-foreground/40'
                )}
              >
                <span className="block text-sm font-medium text-fd-foreground">{plan.name}</span>
                <span className="block text-xs text-fd-muted-foreground">
                  {plan.monthlyPrice === 0
                    ? '$0 / month'
                    : `${formatCurrency(plan.monthlyPrice)} / month`}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-6">
        <div className="mb-2 flex items-end justify-between gap-3">
          <label
            htmlFor="connect-pricing-conversations"
            className="text-sm font-medium text-fd-foreground"
          >
            Active conversations per billing cycle
          </label>
          <input
            id="connect-pricing-conversations-input"
            type="number"
            min={0}
            max={MAX_CONVERSATIONS}
            value={conversations}
            onChange={(event) => handleConversationsChange(Number(event.target.value))}
            className="w-28 rounded-md border border-fd-border bg-fd-background px-2 py-1 text-right text-sm text-fd-foreground"
          />
        </div>
        <input
          id="connect-pricing-conversations"
          type="range"
          min={0}
          max={MAX_CONVERSATIONS}
          step={50}
          value={conversations}
          onChange={(event) => handleConversationsChange(Number(event.target.value))}
          className="w-full accent-[#4b73ec] dark:accent-[#00d5ff]"
        />
        <div className="mt-1 flex justify-between text-xs text-fd-muted-foreground">
          <span>0</span>
          <span>{formatNumber(MAX_CONVERSATIONS)}</span>
        </div>
      </div>

      <div className="rounded-md border border-fd-border bg-fd-background p-4">
        <dl className="space-y-2 text-sm">
          <div className="flex items-center justify-between gap-4">
            <dt className="text-fd-muted-foreground">Plan price</dt>
            <dd className="font-medium text-fd-foreground">
              {formatCurrency(selectedPlan.monthlyPrice)}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="text-fd-muted-foreground">Included conversations</dt>
            <dd className="font-medium text-fd-foreground">
              {formatNumber(selectedPlan.includedConversations)}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="text-fd-muted-foreground">Extra conversations</dt>
            <dd className="font-medium text-fd-foreground">
              {formatNumber(estimate.extraConversations)}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="text-fd-muted-foreground">Overage charges</dt>
            <dd className="font-medium text-fd-foreground">
              {selectedPlan.overageRate === null
                ? 'Not available on Free'
                : formatCurrency(estimate.overageCost)}
            </dd>
          </div>
          <div className="border-t border-fd-border pt-2">
            <div className="flex items-center justify-between gap-4">
              <dt className="font-medium text-fd-foreground">Estimated total</dt>
              <dd className="text-lg font-semibold text-fd-foreground">
                {formatCurrency(estimate.total)}
              </dd>
            </div>
          </div>
        </dl>

        {estimate.isOverFreeLimit ? (
          <p className="mt-3 text-sm text-fd-muted-foreground">
            Free is capped at {formatNumber(selectedPlan.includedConversations)} active
            conversations per billing cycle. Upgrade to Pro or Team to keep running, or wait for
            your next cycle to reset.
          </p>
        ) : null}

        {selectedPlan.overageRate !== null && estimate.extraConversations > 0 ? (
          <p className="mt-3 text-sm text-fd-muted-foreground">
            Overage is billed at {formatCurrency(selectedPlan.overageRate)} per extra conversation
            on the {selectedPlan.name} plan.
          </p>
        ) : null}
      </div>

      <p className="mt-3 text-xs text-fd-muted-foreground">
        Enterprise pricing is custom. For committed volume, HIPAA BAA, SSO, or SCIM, contact{' '}
        <a href="mailto:sales@novu.co" className="text-fd-primary underline underline-offset-2">
          sales@novu.co
        </a>
        .
      </p>
    </div>
  );
}
