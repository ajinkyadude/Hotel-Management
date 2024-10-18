import {ImagePath} from '../../../ImageConstant';

export const ProfileArray = [
  {
    Title: 'QR code',
    SubItem: [
      {
        name: 'My QR Code',
        Image: ImagePath.QrCode,
      },
    ],
  },
  {
    Title: "Menus",
    SubItem: [
        {
            name: 'My Profile',
            Image: ImagePath.MyProfile
        },
        {
            name: 'Favourites',
            Image: ImagePath.Favourites
        },
        {
            name: 'Message',
            Image: ImagePath.Message
        },
        {
            name: 'Wallet',
            Image: ImagePath.Wallet
        },
        {
            name: 'Transaction History',
            Image: ImagePath.TransactionIcon
        },
        {
            name: 'Manage Payment',
            Image: ImagePath.Payment
        },
        {
            name: 'Waits Review',
            Image: ImagePath.ProfileStar
        },
        {
            name: 'Settings',
            Image: ImagePath.Settings
        }
    ]
  }
];
