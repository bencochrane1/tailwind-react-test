/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')

  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          orange: colors.orange,
        }
      }
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
import { Fragment, useState } from "react";
import {
  Disclosure,
  Menu,
  RadioGroup,
  Switch,
  Transition,
  Listbox,
} from "@headlessui/react";
import {
  QuestionMarkCircleIcon,
  SearchIcon,
  CheckIcon,
  SelectorIcon,
} from "@heroicons/react/solid";
import {
  BellIcon,
  CogIcon,
  KeyIcon,
  MenuIcon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/react/outline";

const user = {
  name: "Lisa Marie",
  email: "lisamarie@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "Jobs", href: "#" },
  { name: "Applicants", href: "#" },
  { name: "Company", href: "#" },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const subNavigation = [
  { name: "Personal Details", href: "#", icon: UserCircleIcon, current: false },
  { name: "Super Selection", href: "#", icon: CogIcon, current: false },
  { name: "Bank Details", href: "#", icon: KeyIcon, current: false },
  { name: "TFN Declaration", href: "#", icon: BellIcon, current: true },
];
const plans = [
  { name: "My TFN is pending" },
  {
    name: `I'm under 18 and don't have a TFN`,
    priceMonthly: 99,
    priceYearly: 990,
    limit: "Up to 25 active job postings",
  },
  {
    name: `I have an exemption from quoting a TFN (such as receiving a social security or service pension)
`,
    priceMonthly: 249,
    priceYearly: 2490,
    limit: "Unlimited active job postings",
  },
];
const payments = [
  {
    id: 1,
    date: "1/1/2020",
    datetime: "2020-01-01",
    description: "Business Plan - Annual Billing",
    amount: "CA$109.00",
    href: "#",
  },
  // More payments...
];

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [selectedPlan, setSelectedPlan] = useState(plans[1]);
  const [tfnPresent, setTfnPresent] = useState(true);
  const [annualBillingEnabled, setAnnualBillingEnabled] = useState(true);
  const [tfn, setTfn] = useState("xxx-xxx-082");
  const [selected, setSelected] = useState(people[0]);

  function handleFocusTfn() {
    setTfn("");
  }

  function handleChangeTfn(event) {
    console.log('event...', event.target.value)
  }

  return (
    <div className="bg-gray-100">
      <Disclosure as="header" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="mx-auto px-2 max-w-7xl sm:px-4 lg:px-8 lg:divide-gray-200 lg:divide-y">
              <div className="relative flex justify-between h-16">
                <div className="relative z-10 flex px-2 lg:px-0">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block w-auto h-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-orange-500.svg"
                      alt="Workflow"
                    />
                  </div>
                </div>
                <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                  <div className="w-full max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <SearchIcon
                          className="flex-shrink-0 w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        name="search"
                        id="search"
                        className="placeholder-gray-500 focus:placeholder-gray-400 block pl-10 pr-3 py-2 w-full focus:text-gray-900 text-sm bg-white border border-gray-300 focus:border-gray-900 rounded-md focus:outline-none focus:ring-gray-900 focus:ring-1 sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative z-10 flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-gray-900 focus:ring-2 focus:ring-inset">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden lg:relative lg:z-10 lg:flex lg:items-center lg:ml-4">
                  <button className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-500 bg-white rounded-full focus:outline-none focus:ring-gray-900 focus:ring-offset-2 focus:ring-2">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="w-6 h-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative flex-shrink-0 ml-4">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="flex bg-white rounded-full focus:outline-none focus:ring-gray-900 focus:ring-offset-2 focus:ring-2">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="w-8 h-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="absolute right-0 mt-2 py-1 w-48 bg-white rounded-md focus:outline-none shadow-lg origin-top-right ring-black ring-opacity-5 ring-1"
                          >
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-gray-700 text-sm"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </div>
              <nav
                className="hidden lg:flex lg:py-2 lg:space-x-8"
                aria-label="Global"
              >
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="inline-flex items-center px-3 py-2 text-gray-900 hover:text-gray-900 text-sm font-medium hover:bg-gray-50 rounded-md"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            <Disclosure.Panel
              as="nav"
              className="lg:hidden"
              aria-label="Global"
            >
              <div className="pb-3 pt-2 px-2 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-900 hover:text-gray-900 text-base font-medium hover:bg-gray-50 rounded-md"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="pb-3 pt-4 border-t border-gray-200">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-gray-800 text-base font-medium">
                      {user.name}
                    </div>
                    <div className="text-gray-500 text-sm font-medium">
                      {user.email}
                    </div>
                  </div>
                  <button className="flex-shrink-0 ml-auto p-1 text-gray-400 hover:text-gray-500 bg-white rounded-full focus:outline-none focus:ring-gray-900 focus:ring-offset-2 focus:ring-2">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-gray-500 hover:text-gray-900 text-base font-medium hover:bg-gray-50 rounded-md"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <main className="mx-auto pb-10 max-w-7xl lg:px-8 lg:py-12">
        <div className="lg:grid lg:gap-x-5 lg:grid-cols-12">
          <aside className="px-2 py-6 sm:px-6 lg:col-span-3 lg:px-0 lg:py-0">
            <nav className="space-y-1">
              {subNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-50 text-orange-600 hover:bg-white"
                      : "text-gray-900 hover:text-gray-900 hover:bg-gray-50",
                    "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-orange-500"
                        : "text-gray-400 group-hover:text-gray-500",
                      "flex-shrink-0 -ml-1 mr-3 w-6 h-6"
                    )}
                    aria-hidden="true"
                  />
                  <span className="truncate">{item.name}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* TFN details */}
          <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
            <section aria-labelledby="payment_details_heading">
              <form action="#" method="POST">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-6 bg-white sm:p-6">
                    <div>
                      <h2
                        id="payment_details_heading"
                        className="text-gray-900 text-lg font-medium leading-6"
                      >
                        Tax File Number Declaration
                      </h2>
                    </div>

                    <div className="mt-6">
                      <h3>Do you have your TFN?</h3>
                    </div>
                    <div className="">
                      <div className="flex content-start items-center pt-3">
                        <div className="mr-3">
                          <Switch.Group as="div" className="flex content-start">
                            <Switch
                              checked={tfnPresent}
                              onChange={setTfnPresent}
                              className={classNames(
                                tfnPresent ? "bg-purple-600" : "bg-gray-200",
                                "relative inline-flex flex-shrink-0 w-11 h-6 border-2 border-transparent rounded-full focus:outline-none cursor-pointer transition-colors duration-200 ease-in-out focus:ring-purple-500 focus:ring-offset-2 focus:ring-2 sm:ml-auto"
                              )}
                            >
                              <span className="sr-only">Use setting</span>
                              <span
                                aria-hidden="true"
                                className={classNames(
                                  tfnPresent
                                    ? "translate-x-5"
                                    : "translate-x-0",
                                  "inline-block w-5 h-5 bg-white rounded-full shadow transform transition duration-200 ease-in-out ring-0"
                                )}
                              />
                            </Switch>
                          </Switch.Group>
                        </div>
                        <div
                          className="mb-3 mt-3 text-gray-500 text-sm font-medium"
                        >
                          {tfnPresent
                            ? "Yes I have my TFN"
                            : `I don't have my TFN`}
                        </div>
                      </div>
                    </div>

                    {tfnPresent && (
                      <div className="grid gap-6 grid-cols-4 mt-6">
                        <div className="col-span-4 sm:col-span-2">
                          <label
                            htmlFor="first_name"
                            className="block text-gray-700 text-sm font-medium"
                          >
                            Your tax file number
                          </label>
                          <input
                            onFocus={handleFocusTfn}
                            type="text"
                            name="tfn"
                            id="tfn"
                            value={tfn}
                            autoComplete="none"
                            className="block mt-1 px-3 py-2 w-full border border-gray-300 focus:border-gray-900 rounded-md focus:outline-none shadow-sm focus:ring-gray-900 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-4 sm:col-span-2">
                          <label
                            htmlFor="email_address"
                            className="block text-gray-700 text-sm font-medium"
                          >
                            Email address
                          </label>
                          <input
                            type="text"
                            name="email_address"
                            id="email_address"
                            autoComplete="email"
                            className="block mt-1 px-3 py-2 w-full border border-gray-300 focus:border-gray-900 rounded-md focus:outline-none shadow-sm focus:ring-gray-900 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-4 sm:col-span-1">
                          <label
                            htmlFor="expiration_date"
                            className="block text-gray-700 text-sm font-medium"
                          >
                            Expration date
                          </label>
                          <input
                            type="text"
                            name="expiration_date"
                            id="expiration_date"
                            autoComplete="cc-exp"
                            className="block mt-1 px-3 py-2 w-full border border-gray-300 focus:border-gray-900 rounded-md focus:outline-none shadow-sm focus:ring-gray-900 sm:text-sm"
                            placeholder="MM / YY"
                          />
                        </div>

                        <div className="col-span-4 sm:col-span-1">
                          <label
                            htmlFor="security_code"
                            className="flex items-center text-gray-700 text-sm font-medium"
                          >
                            <span>Security code</span>
                            <QuestionMarkCircleIcon
                              className="flex-shrink-0 ml-1 w-5 h-5 text-gray-300"
                              aria-hidden="true"
                            />
                          </label>
                          <input
                            type="text"
                            name="security_code"
                            id="security_code"
                            autoComplete="cc-csc"
                            className="block mt-1 px-3 py-2 w-full border border-gray-300 focus:border-gray-900 rounded-md focus:outline-none shadow-sm focus:ring-gray-900 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-4 sm:col-span-2">
                          <label
                            htmlFor="country"
                            className="block text-gray-700 text-sm font-medium"
                          >
                            Country / Region
                          </label>
                          <select
                            id="country"
                            name="country"
                            autoComplete="country"
                            className="block mt-1 px-3 py-2 w-full bg-white border border-gray-300 focus:border-gray-900 rounded-md focus:outline-none shadow-sm focus:ring-gray-900 sm:text-sm"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                          </select>
                        </div>

                        <div className="col-span-4 sm:col-span-2">
                          <label
                            htmlFor="postal_code"
                            className="block text-gray-700 text-sm font-medium"
                          >
                            ZIP / Postal
                          </label>
                          <input
                            type="text"
                            name="postal_code"
                            id="postal_code"
                            autoComplete="postal-code"
                            className="block mt-1 px-3 py-2 w-full border border-gray-300 focus:border-gray-900 rounded-md focus:outline-none shadow-sm focus:ring-gray-900 sm:text-sm"
                          />
                        </div>
                      </div>
                    )}

                    {!tfnPresent && (
                      <div className="mt-5">
                        <RadioGroup
                          className="mt-4"
                          value={selectedPlan}
                          onChange={setSelectedPlan}
                        >
                          <RadioGroup.Label className="sr-only">
                            Pricing plans
                          </RadioGroup.Label>
                          <div className="relative bg-white rounded-md -space-y-px">
                            {plans.map((plan, planIdx) => (
                              <RadioGroup.Option
                                key={plan.name}
                                value={plan}
                                className={({ checked }) =>
                                  classNames(
                                    planIdx === 0
                                      ? "rounded-tl-md rounded-tr-md"
                                      : "",
                                    planIdx === plans.length - 1
                                      ? "rounded-bl-md rounded-br-md"
                                      : "",
                                    checked
                                      ? "bg-orange-50 border-orange-200 z-10"
                                      : "border-gray-200",
                                    "relative flex flex-col p-4 border focus:outline-none cursor-pointer md:pl-4 md:pr-6"
                                  )
                                }
                              >
                                {({ active, checked }) => (
                                  <>
                                    <div className="flex items-center text-sm">
                                      <span
                                        className={classNames(
                                          checked
                                            ? "bg-orange-500 border-transparent"
                                            : "bg-white border-gray-300",
                                          active
                                            ? "ring-2 ring-offset-2 ring-gray-900"
                                            : "",
                                          "flex items-center justify-center w-4 h-4 border rounded-full"
                                        )}
                                        aria-hidden="true"
                                      >
                                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                                      </span>
                                      <RadioGroup.Label
                                        as="span"
                                        className="ml-3 text-gray-900 font-medium"
                                      >
                                        {plan.name}
                                      </RadioGroup.Label>
                                    </div>
                                  </>
                                )}
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>

                        <Listbox value={selected} onChange={setSelected}>
                          {({ open }) => (
                            <>
                              <div className="relative mt-1">
                                <Listbox.Button className="relative pl-3 pr-10 py-2 w-full text-left bg-white focus-visible:border-indigo-500 rounded-lg focus:outline-none shadow-md cursor-default focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:ring-opacity-75 focus-visible:ring-2 sm:text-sm">
                                  <span className="block truncate">
                                    {selected.name}
                                  </span>
                                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <SelectorIcon
                                      className="w-5 h-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Listbox.Button>
                                <Transition
                                  show={open}
                                  as={Fragment}
                                  leave="transition ease-in duration-100"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Listbox.Options
                                    static
                                    className="absolute mt-1 py-1 w-full max-h-60 text-base bg-white rounded-md focus:outline-none shadow-lg overflow-auto ring-black ring-opacity-5 ring-1 sm:text-sm"
                                  >
                                    {people.map((person, personIdx) => (
                                      <Listbox.Option
                                        key={personIdx}
                                        className={({ active }) =>
                                          `${
                                            active
                                              ? "text-amber-900 bg-amber-100"
                                              : "text-gray-900"
                                          }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                                        }
                                        value={person}
                                      >
                                        {({ selected, active }) => (
                                          <>
                                            <span
                                              className={`${
                                                selected
                                                  ? "font-medium"
                                                  : "font-normal"
                                              } block truncate`}
                                            >
                                              {person.name}
                                            </span>
                                            {selected ? (
                                              <span
                                                className={`${
                                                  active
                                                    ? "text-amber-600"
                                                    : "text-amber-600"
                                                }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                              >
                                                <CheckIcon
                                                  className="w-5 h-5"
                                                  aria-hidden="true"
                                                />
                                              </span>
                                            ) : null}
                                          </>
                                        )}
                                      </Listbox.Option>
                                    ))}
                                  </Listbox.Options>
                                </Transition>
                              </div>
                            </>
                          )}
                        </Listbox>
                      </div>
                    )}

                    <div className="grid gap-6 grid-cols-4 mt-6">
                      <div className="col-span-4 sm:col-span-2">
                        <label
                          htmlFor="first_name"
                          className="block text-gray-700 text-sm font-medium"
                        >
                          Your tax file number
                        </label>
                        <input
                          onFocus={handleFocusTfn}
                          type="text"
                          name="tfn"
                          id="tfn"
                          onChange={handleChangeTfn}
                          value={tfn}
                          autoComplete="none"
                          className="block mt-1 px-3 py-2 w-full border border-gray-300 focus:border-gray-900 rounded-md focus:outline-none shadow-sm focus:ring-gray-900 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-4 sm:col-span-2">
                        <label
                          htmlFor="email_address"
                          className="block text-gray-700 text-sm font-medium"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email_address"
                          id="email_address"
                          autoComplete="email"
                          className="block mt-1 px-3 py-2 w-full border border-gray-300 focus:border-gray-900 rounded-md focus:outline-none shadow-sm focus:ring-gray-900 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-4 sm:col-span-1">
                        <label
                          htmlFor="expiration_date"
                          className="block text-gray-700 text-sm font-medium"
                        >
                          Expration date
                        </label>
                        <input
                          type="text"
                          name="expiration_date"
                          id="expiration_date"
                          autoComplete="cc-exp"
                          className="block mt-1 px-3 py-2 w-full border border-gray-300 focus:border-gray-900 rounded-md focus:outline-none shadow-sm focus:ring-gray-900 sm:text-sm"
                          placeholder="MM / YY"
                        />
                      </div>

                      <div className="col-span-4 sm:col-span-1">
                        <label
                          htmlFor="security_code"
                          className="flex items-center text-gray-700 text-sm font-medium"
                        >
                          <span>Security code</span>
                          <QuestionMarkCircleIcon
                            className="flex-shrink-0 ml-1 w-5 h-5 text-gray-300"
                            aria-hidden="true"
                          />
                        </label>
                        <input
                          type="text"
                          name="security_code"
                          id="security_code"
                          autoComplete="cc-csc"
                          className="block mt-1 px-3 py-2 w-full border border-gray-300 focus:border-gray-900 rounded-md focus:outline-none shadow-sm focus:ring-gray-900 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-4 sm:col-span-2">
                        <label
                          htmlFor="country"
                          className="block text-gray-700 text-sm font-medium"
                        >
                          Country / Region
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          className="block mt-1 px-3 py-2 w-full bg-white border border-gray-300 focus:border-gray-900 rounded-md focus:outline-none shadow-sm focus:ring-gray-900 sm:text-sm"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>

                      <div className="col-span-4 sm:col-span-2">
                        <label
                          htmlFor="postal_code"
                          className="block text-gray-700 text-sm font-medium"
                        >
                          ZIP / Postal
                        </label>
                        <input
                          type="text"
                          name="postal_code"
                          id="postal_code"
                          autoComplete="postal-code"
                          className="block mt-1 px-3 py-2 w-full border border-gray-300 focus:border-gray-900 rounded-md focus:outline-none shadow-sm focus:ring-gray-900 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center px-4 py-2 text-white text-sm font-medium bg-gray-800 hover:bg-gray-900 border border-transparent rounded-md focus:outline-none shadow-sm focus:ring-gray-900 focus:ring-offset-2 focus:ring-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </section>

            {/* Plan */}
            <section aria-labelledby="plan_heading">
              <form action="#" method="POST">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-6 bg-white space-y-6 sm:p-6">
                    <div>
                      <h2
                        id="plan_heading"
                        className="text-gray-900 text-lg font-medium leading-6"
                      >
                        Plan
                      </h2>
                    </div>

                    <RadioGroup value={selectedPlan} onChange={setSelectedPlan}>
                      <RadioGroup.Label className="sr-only">
                        Pricing plans
                      </RadioGroup.Label>
                      <div className="relative bg-white rounded-md -space-y-px">
                        {plans.map((plan, planIdx) => (
                          <RadioGroup.Option
                            key={plan.name}
                            value={plan}
                            className={({ checked }) =>
                              classNames(
                                planIdx === 0
                                  ? "rounded-tl-md rounded-tr-md"
                                  : "",
                                planIdx === plans.length - 1
                                  ? "rounded-bl-md rounded-br-md"
                                  : "",
                                checked
                                  ? "bg-orange-50 border-orange-200 z-10"
                                  : "border-gray-200",
                                "relative flex flex-col p-4 border focus:outline-none cursor-pointer md:grid md:grid-cols-3 md:pl-4 md:pr-6"
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <div className="flex items-center text-sm">
                                  <span
                                    className={classNames(
                                      checked
                                        ? "bg-orange-500 border-transparent"
                                        : "bg-white border-gray-300",
                                      active
                                        ? "ring-2 ring-offset-2 ring-gray-900"
                                        : "",
                                      "flex items-center justify-center w-4 h-4 border rounded-full"
                                    )}
                                    aria-hidden="true"
                                  >
                                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                                  </span>
                                  <RadioGroup.Label
                                    as="span"
                                    className="ml-3 text-gray-900 font-medium"
                                  >
                                    {plan.name}
                                  </RadioGroup.Label>
                                </div>
                                <RadioGroup.Description className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                                  <span
                                    className={classNames(
                                      checked
                                        ? "text-orange-900"
                                        : "text-gray-900",
                                      "font-medium"
                                    )}
                                  >
                                    ${plan.priceMonthly} / mo
                                  </span>{" "}
                                  <span
                                    className={
                                      checked
                                        ? "text-orange-700"
                                        : "text-gray-500"
                                    }
                                  >
                                    (${plan.priceYearly} / yr)
                                  </span>
                                </RadioGroup.Description>
                                <RadioGroup.Description
                                  className={classNames(
                                    checked
                                      ? "text-orange-700"
                                      : "text-gray-500",
                                    "ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right"
                                  )}
                                >
                                  {plan.limit}
                                </RadioGroup.Description>
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>

                    <Switch.Group as="div" className="flex items-center">
                      <Switch
                        checked={annualBillingEnabled}
                        onChange={setAnnualBillingEnabled}
                        className={classNames(
                          annualBillingEnabled
                            ? "bg-orange-500"
                            : "bg-gray-200",
                          "relative inline-flex flex-shrink-0 w-11 h-6 border-2 border-transparent rounded-full focus:outline-none cursor-pointer transition-colors duration-200 ease-in-out focus:ring-gray-900 focus:ring-offset-2 focus:ring-2"
                        )}
                      >
                        <span className="sr-only">Use setting</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            annualBillingEnabled
                              ? "translate-x-5"
                              : "translate-x-0",
                            "inline-block w-5 h-5 bg-white rounded-full shadow transform transition duration-200 ease-in-out ring-0"
                          )}
                        />
                      </Switch>
                      <Switch.Label as="span" className="ml-3">
                        <span className="text-gray-900 text-sm font-medium">
                          Annual billing{" "}
                        </span>
                        <span className="text-gray-500 text-sm">
                          (Save 10%)
                        </span>
                      </Switch.Label>
                    </Switch.Group>
                  </div>
                  <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center px-4 py-2 text-white text-sm font-medium bg-gray-800 hover:bg-gray-900 border border-transparent rounded-md focus:outline-none shadow-sm focus:ring-gray-900 focus:ring-offset-2 focus:ring-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </section>

            {/* Billing history */}
            <section aria-labelledby="billing_history_heading">
              <div className="pt-6 bg-white shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 sm:px-6">
                  <h2
                    id="billing_history_heading"
                    className="text-gray-900 text-lg font-medium leading-6"
                  >
                    Billing history
                  </h2>
                </div>
                <div className="flex flex-col mt-6">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block align-middle py-2 min-w-full sm:px-6 lg:px-8">
                      <div className="border-t border-gray-200 overflow-hidden">
                        <table className="min-w-full divide-gray-200 divide-y">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-gray-500 text-xs font-medium tracking-wider uppercase"
                              >
                                Date
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-gray-500 text-xs font-medium tracking-wider uppercase"
                              >
                                Description
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-gray-500 text-xs font-medium tracking-wider uppercase"
                              >
                                Amount
                              </th>
                              {/*
                                `relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
                              */}
                              <th
                                scope="col"
                                className="relative px-6 py-3 text-left text-gray-500 text-xs font-medium tracking-wider uppercase"
                              >
                                <span className="sr-only">View receipt</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-gray-200 divide-y">
                            {payments.map((payment) => (
                              <tr key={payment.id}>
                                <td className="px-6 py-4 text-gray-900 whitespace-nowrap text-sm font-medium">
                                  <time dateTime={payment.datetime}>
                                    {payment.date}
                                  </time>
                                </td>
                                <td className="px-6 py-4 text-gray-500 whitespace-nowrap text-sm">
                                  {payment.description}
                                </td>
                                <td className="px-6 py-4 text-gray-500 whitespace-nowrap text-sm">
                                  {payment.amount}
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm font-medium">
                                  <a
                                    href={payment.href}
                                    className="text-orange-600 hover:text-orange-900"
                                  >
                                    View receipt
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
