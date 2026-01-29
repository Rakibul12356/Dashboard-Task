
import React, { useState } from 'react';
import Avatar from '../../../Components/ui/Avatar';
import Input from '../../../Components/ui/Input';
import Button from '../../../Components/ui/Button';
import Tabs from '../../../Components/ui/Tabs';

const buttonActiveStyle = {
    backgroundImage: `
    linear-gradient(135deg,#152252,#111B3C),
    url('/Frame.png')
  `,
    backgroundSize: '100% 100%, cover',
    backgroundPosition: 'center, center',
    backgroundRepeat: 'no-repeat, no-repeat',
    backgroundBlendMode: 'overlay',
    boxShadow: `
    0 3.71px 4.85px rgba(87,177,255,0.15),
    0 10.27px 13.4px rgba(87,177,255,0.22),
    0 24.72px 32.26px rgba(87,177,255,0.18),
    0 42px 107px rgba(87,177,255,0.34)
  `
};

const InfoRow = ({ label, value }) => (
    <div className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-[#192D71] last:border-0">
        <span className="text-white font-semibold w-40 mb-1 sm:mb-0">{label}:</span>
        <span className="text-white/80 flex-1">{value}</span>
    </div>
);

const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [isEditing, setIsEditing] = useState(false);

    const [formData, setFormData] = useState({
        fullName: 'Jane D.',
        email: 'jane@gmail.com',
        storeName: 'Ubreakfix Store',
        storeAddress: '123 Main Street, New York, NY 10001'
    });

    const tabs = [
        { id: 'profile', label: 'Profile' },
        { id: 'password', label: 'Password Settings' }
    ];

    const handleInputChange = (field) => (e) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

    const handleSave = () => {
        console.log('Saving:', formData);
        setIsEditing(false);
    };

    return (
        <div className="min-h-screen p-4 sm:p-6 text-white">
            {/* Tabs */}
            <Tabs
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={(tab) => {
                    setActiveTab(tab);
                    setIsEditing(false);
                }}
                className="mb-8"
            />

            {activeTab === 'profile' && (
                <div>
                    {!isEditing ? (
                        /* VIEW MODE */
                        <div className="max-w-3xl animate-fade-in">

                            <div className="mb-8">
                                <p className="text-white text-sm mb-4">Profile Image</p>
                                <div className="flex items-center gap-6">
                                    <Avatar size="lg" />

                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="relative flex items-center justify-center px-6 py-3 rounded-full transition-all hover:brightness-110"
                                        style={buttonActiveStyle} 
                                    >
                                       
                                        <span
                                            className="absolute inset-0 rounded-full pointer-events-none"
                                            style={{
                                                border: '1px solid transparent',
                                                background: 'linear-gradient(135deg,#0088FF,#77C0FF) border-box',
                                                WebkitMask:
                                                    'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                                                WebkitMaskComposite: 'xor',
                                                maskComposite: 'exclude' 
                                            }}
                                        />


                                        <span
                                            className="absolute inset-0 rounded-full pointer-events-none"
                                            style={{
                                                boxShadow:
                                                    'inset 0 1px 4px #D2EAFF, inset 0 0 18px rgba(210,234,255,.4)'
                                            }}
                                        />

                                        {/* Button Text */}
                                        <span className="relative z-10 text-xs sm:text-sm text-white font-medium">
                                            Edit Profile
                                        </span>
                                    </button>
                                   

                                </div>
                            </div>

                            {/* Static Details List */}
                            <div className="space-y-2">
                                <InfoRow label="Full Name" value={formData.fullName} />
                                <InfoRow label="Email" value={formData.email} />
                                <InfoRow label="Store Name" value={formData.storeName} />
                                <InfoRow label="Store Address" value={formData.storeAddress} />
                            </div>
                        </div>
                    ) : (
                        /* EDIT MODE */
                        <div className="animate-fade-in">
                            <div className="mb-8">
                                <p className="text-white/60 text-sm mb-4">Profile Image</p>
                                <Avatar size="lg" showEditBadge onEditClick={() => console.log('Edit avatar')} />
                            </div>


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl">
                                <Input
                                    label="Full Name"
                                    value={formData.fullName}
                                    onChange={handleInputChange('fullName')}
                                />
                                <Input
                                    label="Email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange('email')}
                                />
                                <Input
                                    label="Store Name"
                                    value={formData.storeName}
                                    onChange={handleInputChange('storeName')}
                                />
                                <Input
                                    label="Store Address"
                                    value={formData.storeAddress}
                                    onChange={handleInputChange('storeAddress')}
                                />
                            </div>

                            {/* Save Button */}
                            <div className="mt-8 flex justify-center max-w-3xl">
                                <Button onClick={handleSave} className="min-w-50">
                                    Save
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {activeTab === 'password' && (
                <div className="max-w-md">
                    <div className="space-y-4">
                        <Input label="Current Password" type="password" placeholder="Enter current password" onChange={() => { }} />
                        <Input label="New Password" type="password" placeholder="Enter new password" onChange={() => { }} />
                        <Input label="Confirm New Password" type="password" placeholder="Confirm new password" onChange={() => { }} />
                    </div>
                    <div className="mt-8">
                        <Button className="min-w-50">Update Password</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Settings;