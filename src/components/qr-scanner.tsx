'use client';

import { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

interface QRScannerProps {
  onScan: (decodedText: string) => void;
  onError?: (error: any) => void;
}

export function QRScanner({ onScan, onError }: QRScannerProps) {
  const [scannerId] = useState(`qr-reader-${Math.random().toString(36).substring(2, 9)}`);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  useEffect(() => {
    if (!scannerRef.current) {
      scannerRef.current = new Html5QrcodeScanner(
        scannerId,
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
          aspectRatio: 1.0,
        },
        false
      );

      scannerRef.current.render(
        (decodedText) => {
          onScan(decodedText);
          scannerRef.current?.pause(true);
        },
        (error) => {
          if (onError) onError(error);
        }
      );
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(console.error);
        scannerRef.current = null;
      }
    };
  }, [scannerId, onScan, onError]);

  return (
    <div 
      id={scannerId} 
      className="w-full max-w-sm mx-auto overflow-hidden rounded-xl border bg-black aspect-square" 
    />
  );
}
