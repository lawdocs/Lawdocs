  import { useEffect, useState } from "react";
  import { Button } from "../ui/button";
  import { Menu, X, ChevronDown } from "lucide-react";
  import { Link } from "react-router-dom";
  import companylogo from "../../../public/assets/Logo/LawdocsLogo4.png";
  import {  useAuth,useClerk,useUser , } from "@clerk/clerk-react";
  import axios from 'axios'
  import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from "@clerk/clerk-react";


  const menuItems = [
    {
      title: "Drafts",
      subItems: [
        {
          title: "Property Matters",
          subItems: [
            "Building Contracts",
            "Exchange Deeds and Settlements",
            "Lease",
            "Mortgage",
            "Notices regarding Property Transactions",
            "Release And NOCs",
            "Rent",
            "Sale And Purchase",
          ],
        },
        {
          title: "Succession And Inheritance",
          subItems: [
            "Adoption",
            "Family Agreement And Settlement",
            "Gift Deed",
            "Partition",
            "Power Of Attorney",
            "Will",
          ],
        },
        {
          title: "Pleadings",
          subItems: ["Pre-Litigation", "ADR", "Family"],
        },
        {
          title: "IPR",
          subItems: ["Copyrights", "Patents", "Trademarks"],
        },
      ],
    },
    {
      title: "NBFC & SEBI Compliance",
      subItems: [
        {
          title: "Fintech Compliance",
          subItems: [],
        },
        {
          title: "NBFC Compliance",
          subItems: [],
        },
        {
          title: "SEBI Compliance",
          subItems: [],
        },
      ],
    },
    {
      title: "Data Compliance",
      subItems: [
        {
          title: "GDPR compliances",
          subItems: [],
        },
        {
          title: "CCPA compliances",
          subItems: [],
        },
        {
          title: "HIPAA compliances",
          subItems: [],
        },
      ],
    },
    {
      title: "Startups",
      subItems: [
        {
          title: "Incorporate Your Business",
          subItems: [
            "Private Limited Company",
            "One Person Company",
            "Sole Proprietorship",
            "Partnership Firm",
            "Limited Liability Partnership",
            "Nidhi Company",
          ],
        },
        {
          title: "Statutory Registration",
          subItems: [
            "MSME Registration",
            "APDEA Registration",
            "Pollution Registration",
            "Spices Board Registration",
            "Barcode Registration",
            "GST Registration",
          ],
        },
      ],
    },
    {
      title: "Entity Compliance",
      subItems: [
        {
          title: "ROC Compliances",
          subItems: [
            "Corporate Compliances",
            "Company Annual fillings",
            "LLP Annual Filing",
          ],
        },
        {
          title: "GST And Taxation Filing",
          subItems: [
            "GST Return Filing",
            "Income Tax Return",
            "TDS Return Filing",
          ],
        },
      ],
    },
    {
      title: "Legal Help",
      subItems: [
        {
          title: "Talk To A Lawyer",
          subItems: [],
        },
        {
          title: "Documents Drafting",
          subItems: [],
        },
      ],
    },
  ];

 
function Navbar() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const { signOut } = useClerk();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [nestedDropdownOpen, setNestedDropdownOpen] = useState(null);

  useEffect(() => {
    if (user?.id && isSignedIn) {
      axios
        .post(`${import.meta.env.VITE_API_BASE_URL}/user/save-user`, {
          clerkId: user.id,
          email: user.primaryEmailAddress?.emailAddress,
          username: user.username,
          phoneNumber: user.primaryPhoneNumber?.phoneNumber,
          imageUrl: user.imageUrl,
        })
        .then((res) => console.log("User saved:", res.data))
        .catch((err) => console.error("Error saving user:", err));
    }
  }, [user, isSignedIn]);

   const handleMouseEnter = (index) => {
     setDropdownOpen(index);
   };

   const handleMouseLeave = () => {
     setDropdownOpen(null);
     setNestedDropdownOpen(null);
   };

   const handleNestedMouseEnter = (index) => {
     setNestedDropdownOpen(index);
   };

   const handleNestedMouseLeave = () => {
     setNestedDropdownOpen(null);
   };

  return (
    <div className="fixed w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center">
          <img className="w-12 h-12" src={companylogo} alt="Company Logo" />
          <div className="ml-2 text-xl font-bold">LawDocs</div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex lg:text-[1.2vw] items-center font-medium hover:text-blue-600">
                {item.title}{" "}
                {item.subItems.length > 0 && (
                  <ChevronDown size={16} className="ml-1" />
                )}
              </button>

              {dropdownOpen === index && (
                <div className="absolute left-0 bg-white shadow-lg rounded-lg py-2 w-[16vw]">
                  {item.subItems.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="relative group"
                      onMouseEnter={() => handleNestedMouseEnter(subIndex)}
                      onMouseLeave={handleNestedMouseLeave}
                    >
                      <button className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100">
                        {subItem.title}
                        {subItem.subItems.length > 0 && (
                          <ChevronDown size={12} />
                        )}
                      </button>

                      {/* Nested Dropdown */}
                      {nestedDropdownOpen === subIndex &&
                        subItem.subItems.length > 0 && (
                          <div className="absolute left-full top-0 bg-white shadow-md rounded-lg px-4 py-2 w-[17vw] whitespace-nowrap ">
                            {subItem.subItems.map((nestedItem, nestedIndex) => (
                              <button
                                key={nestedIndex}
                                className="block  py-2 text-gray-700 hover:bg-gray-100 "
                              >
                                {nestedItem}
                              </button>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-black text-white px-4 py-2 rounded-md hover:scale-105 transition">
                Login
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-100 py-4 px-6">
          {menuItems.map((item, index) => (
            <div key={index} className="mb-2">
              <button
                className="w-full flex justify-between py-2 font-medium"
                onClick={() =>
                  setDropdownOpen(dropdownOpen === index ? null : index)
                }
              >
                {item.title}{" "}
                {item.subItems.length > 0 && (
                  <ChevronDown
                    size={16}
                    className={`transition ${
                      dropdownOpen === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              {dropdownOpen === index && (
                <div className="pl-4 space-y-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <div key={subIndex}>
                      <button
                        className="w-full flex justify-between py-1 text-gray-700"
                        onClick={() =>
                          setNestedDropdownOpen(
                            nestedDropdownOpen === subIndex ? null : subIndex
                          )
                        }
                      >
                        {subItem.title}
                        {subItem.subItems.length > 0 && (
                          <ChevronDown size={12} />
                        )}
                      </button>
                      {nestedDropdownOpen === subIndex &&
                        subItem.subItems.length > 0 && (
                          <div className="pl-4 space-y-1">
                            {subItem.subItems.map((subSubItem, subSubIndex) => (
                              <Link
                                key={subSubIndex}
                                className="block text-gray-700 py-1"
                              >
                                {subSubItem}
                              </Link>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
