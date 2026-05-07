import { NextRequest, NextResponse } from 'next/server';
import { getChatRecord, saveChatRecord, clearChatRecord } from '@/lib/chatStorage';

interface Params {
  params: Promise<{ artifactId: string }>;
}

export async function GET(request: NextRequest, { params }: Params) {
  try {
    const { artifactId } = await params;
    const id = parseInt(artifactId);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid artifact ID' },
        { status: 400 }
      );
    }

    const messages = getChatRecord(id);

    return NextResponse.json({
      success: true,
      artifactId: id,
      messages
    });
  } catch (error) {
    console.error('Get chat error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest, { params }: Params) {
  try {
    const { artifactId } = await params;
    const id = parseInt(artifactId);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid artifact ID' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { messages } = body;

    if (!Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages must be an array' },
        { status: 400 }
      );
    }

    saveChatRecord(id, messages);

    return NextResponse.json({
      success: true,
      artifactId: id,
      message: 'Chat saved successfully'
    });
  } catch (error) {
    console.error('Save chat error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const { artifactId } = await params;
    const id = parseInt(artifactId);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid artifact ID' },
        { status: 400 }
      );
    }

    clearChatRecord(id);

    return NextResponse.json({
      success: true,
      artifactId: id,
      message: 'Chat cleared successfully'
    });
  } catch (error) {
    console.error('Clear chat error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}