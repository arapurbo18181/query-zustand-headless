import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import { useStore } from "../store";

const Sidebar = ({ user }) => {
  const { isOpen, closeSidebar } = useStore();
  return (
    <Transition.Root show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={closeSidebar}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none"
          >
            <div className="inset-y-0 right-0 max-w-xs w-full bg-white p-4 shadow">
              {user ? (
                <>
                  <h3 className="text-lg font-semibold mb-2">{user.name}</h3>
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Sidebar;
