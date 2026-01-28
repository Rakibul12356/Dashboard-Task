import React, { useState } from 'react';
import Avatar from '../../../Components/ui/Avatar';
import Input from '../../../Components/ui/Input';
import Button from '../../../Components/ui/Button';
import Tabs from '../../../Components/ui/Tabs';

const Settings = () => {
	const [activeTab, setActiveTab] = useState('profile');
	const [formData, setFormData] = useState({
		fullName: 'Jane D.',
		email: 'jane@gmail.com',
		storeName: 'Ubreakfix Store',
		storeAddress: '123 Main Street, New York'
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
		// Add save logic here
	};

	return (
		<div className="min-h-screen p-4 sm:p-6">
			{/* Tabs */}
			<Tabs 
				tabs={tabs} 
				activeTab={activeTab} 
				onTabChange={setActiveTab}
				className="mb-8"
			/>

			{activeTab === 'profile' && (
				<div>
					{/* Profile Image Section */}
					<div className="mb-8">
						<p className="text-white/60 text-sm mb-4">Profile Image</p>
						<Avatar size="lg" showEditBadge onEditClick={() => console.log('Edit avatar')} />
					</div>

					{/* Form Fields */}
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
						<Button onClick={handleSave} className="min-w-[200px]">
							Save
						</Button>
					</div>
				</div>
			)}

			{activeTab === 'password' && (
				<div className="max-w-md">
					<div className="space-y-4">
						<Input
							label="Current Password"
							type="password"
							value=""
							onChange={() => {}}
							placeholder="Enter current password"
						/>
						<Input
							label="New Password"
							type="password"
							value=""
							onChange={() => {}}
							placeholder="Enter new password"
						/>
						<Input
							label="Confirm New Password"
							type="password"
							value=""
							onChange={() => {}}
							placeholder="Confirm new password"
						/>
					</div>

					<div className="mt-8">
						<Button className="min-w-[200px]">
							Update Password
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Settings;
